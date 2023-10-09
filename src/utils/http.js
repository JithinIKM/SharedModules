import { createAction } from '@reduxjs/toolkit';
import {
  deleteRequest, getRequest, patchRequest, postRequest, putRequest
} from 'app/axios';
import { Toast } from 'common/components';
import { HTTP_HEADERS, REQUEST_METHOD, REQUEST_STATUS } from 'common/constants';
import _ from 'lodash';
import { getCommonConfigSelector } from 'pages/common/projectSelectors';
import { call, put, select } from 'redux-saga/effects';

const { errorTost } = Toast;

const getApiMethod = (method) => {
  switch (method) {
    case REQUEST_METHOD.DELETE:
      return deleteRequest;
    case REQUEST_METHOD.PUT:
      return putRequest;
    case REQUEST_METHOD.PATCH:
      return patchRequest;
    case REQUEST_METHOD.POST:
      return postRequest;
    case REQUEST_METHOD.MULTIPART:
      return postRequest;
    default:
      return getRequest;
  }
};

const getRequestParams = ({
  url, data: requestData = {}, params: requestParams = {}, method, commonConfig
}) => {
  let params = {};
  let data = {};
  const headers = { ...HTTP_HEADERS };
  if (method === REQUEST_METHOD.MULTIPART) {
    _.set(headers, 'Content-Type', 'multipart/form-data');
  }
  if (method === REQUEST_METHOD.DELETE || method === REQUEST_METHOD.GET) {
    params = { ...requestData, ...requestParams };
    data = {};
  } else {
    params = requestParams;
    data = requestData;
  }
  const baseURL = import.meta.env.VITE_API_URL;
  let authHeaders = {};
  let bearerToken;

  // TODO: Add Logic for fetching bearerToken
  if (bearerToken) {
    authHeaders = { Authorization: `Bearer ${bearerToken}` };
  }

  if (url === 'TEST') {
    // TODO: modify headers , baseURL, authHeaders , etc... based on url
  }

  const customHeaders = { 'X-STATE-CODE': commonConfig.stateId, 'X-LANGUAGE': commonConfig.locale };

  return {
    config: {
      headers: {
        ...headers,
        ...authHeaders,
        ...customHeaders
      },
      params
    },
    baseURL,
    data,
    api: getApiMethod(method)
  };
};

function* invokeApi(method, url, payload) {
  const { types = ['REQUEST', 'SUCCESS', 'FAILURE'], data: payloadData, params = {} } = payload;
  const requestAction = createAction(types[0]);
  const successAction = createAction(types[1]);
  const failureAction = createAction(types[2]);

  yield put(requestAction({ isLoading: true, status: REQUEST_STATUS.PROGRESS }));

  const commonConfig = yield select(getCommonConfigSelector);

  const {
    api, config, baseURL, data
  } = getRequestParams({
    url, data: payloadData, params, method, commonConfig
  });

  const apiResponse = yield call(api, url, { config, baseURL, data });
  const { data: response, error } = apiResponse;
  if (error) {
    yield put(failureAction({ error, isLoading: false, status: REQUEST_STATUS.FAILED }));
    const {
      code,
      title,
      message = 'Please try again after some time.',
      response: { data: customErrorResponse } = {}
    } = error;
    const errorMessage = { title: title || code || 'Error Occurred', description: _.isObject(customErrorResponse) ? customErrorResponse.error || message : customErrorResponse || message };
    // TODO: handle logout based on Invalid token  , token expired
    yield call(errorTost, { id: 'ERROR_PRIMARY', ...errorMessage });
  } else if (_.has(response, 'error')) {
    const customError = response.error || {};
    yield put(failureAction({
      error: customError,
      isLoading: false,
      status: REQUEST_STATUS.FAILED
    }));
    yield call(errorTost, { id: 'ERROR_SECONDARY', title: 'CUSTOM_ERROR', message: JSON.stringify(customError) });
  } else {
    const responsePayLoad = _.has(response, 'payload') ? {
      data: response.payload,
      message: response.message
    } : { data: response };
    yield put(successAction({
      ...responsePayLoad,
      isLoading: false,
      status: REQUEST_STATUS.SUCCESS
    }));
  }

  return { response, error };
}

export function* handleAPIRequest(apiFn, ...rest) {
  const { method, url, payload } = apiFn(...rest);
  return yield call(invokeApi, method, url, payload);
}
