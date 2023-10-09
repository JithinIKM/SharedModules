import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { STATE } from 'common/constants';
import { STATE_REDUCER_KEY } from './constants';

const initialState = {
  navigate: {
    active: false,
    to: ''
  },
  commonConfig: {
    stateId: STATE.code,
    currentYear: 2023,
    locale: 'en'
  },
  country: {}
};

const slice = createSlice({
  initialState,
  name: STATE_REDUCER_KEY,
  reducers: {
    navigateTo: (state, { payload }) => {
      _.set(state, 'navigate', { active: true, ...payload });
    },
    disableNavigate: (state) => {
      _.set(state, 'navigate.active', false);
    },
    setLayoutColumns: (state, { payload = {} }) => {
      _.set(state, 'layout.columns', { ...state.layout.columns, ...payload });
    }
  }
});
export const { actions, reducer } = slice;
