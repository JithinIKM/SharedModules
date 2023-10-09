import {
  BASE_PATH, MODULE_CIT, MODULE_PATH
} from './constants';

export const ROUTE_URL = {
  ROOT: '/',
  ROOT_BASE: `/${BASE_PATH}`,
  ROOT_BASE_MODULE: `/${BASE_PATH}/${MODULE_PATH}`,
  CITIZEN: {
    BASE: `/${BASE_PATH}/${MODULE_PATH}/${MODULE_CIT}`,
    NEW_BIRTH: {
      NEW: 'birth-new',
      EDIT: 'birth-new/:id'
    }
  }
};
