import { API_URL, REQUEST_METHOD } from 'common';
import { ACTION_TYPES } from './actions';

export const fetchProfile = () => {
  return {
    url: API_URL.COMMON.USER_PROFILE,
    method: REQUEST_METHOD.GET,
    payload: {
      types: [
        ACTION_TYPES.FETCH_USER_PROFILE_REQUEST,
        ACTION_TYPES.FETCH_USER_PROFILE_SUCCESS,
        ACTION_TYPES.FETCH_USER_PROFILE_FAILURE
      ]
    }
  };
};
