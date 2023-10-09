import { flow } from 'lodash';
import { STATE_REDUCER_KEY } from './constants';

const getCommonData = (state) => state[STATE_REDUCER_KEY];

const commonConfig = (state) => state.commonConfig;
export const getCommonConfigSelector = flow(getCommonData, commonConfig);

const sidebarData = (state) => state?.sidebarData || {};
export const getSidebarData = flow(getCommonData, sidebarData);

const activeStep = (state) => state?.activeStep || 0;
export const getSidebarActiveStep = flow(getSidebarData, activeStep);

const userProfile = (state) => state.userProfile || {};
export const getUserProfile = flow(getCommonData, userProfile);

const layoutColumns = (state) => state?.layout.columns || {};
export const getLayoutColumns = flow(getCommonData, layoutColumns);
