import {
  all, takeLatest, call
} from 'redux-saga/effects';
import { handleAPIRequest } from 'utils/http';
import { ACTION_TYPES } from './actions';
import * as api from './api';

export function* fetchProfile({ payload = {} }) {
  yield call(handleAPIRequest, api.fetchProfile, payload);
}

export default function* commonSaga() {
  yield all([
    takeLatest(ACTION_TYPES.FETCH_USER_PROFILE, fetchProfile)]);
}
