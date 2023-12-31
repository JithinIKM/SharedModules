import { createAction } from '@reduxjs/toolkit';
import { STATE_REDUCER_KEY } from './constants';

export const ACTION_TYPES = {
  FETCH_USER_PROFILE: `${STATE_REDUCER_KEY}/FETCH_USER_PROFILE`,
  FETCH_USER_PROFILE_REQUEST: `${STATE_REDUCER_KEY}/FETCH_USER_PROFILE_REQUEST`,
  FETCH_USER_PROFILE_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_USER_PROFILE_SUCCESS`,
  FETCH_USER_PROFILE_FAILURE: `${STATE_REDUCER_KEY}/FETCH_USER_PROFILE_FAILURE`
};

export const fetchProfile = createAction(ACTION_TYPES.FETCH_USER_PROFILE);
