export const REQUEST_METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
  MULTIPART: 'MULTIPART'
};
export const CONTENT_TYPE = {
  APPLICATION_JSON: 'application/json'
};

export const HTTP_HEADERS = {
  'Content-Type': CONTENT_TYPE.APPLICATION_JSON,
  Accept: CONTENT_TYPE.APPLICATION_JSON
};

export const STATE = { id: '14', code: 'kl', name: 'Kerala' };
export const COUNTRY = {
  id: '1', code: 'COUNTRY_INDIA', countryCode: 'IND', name: 'India'
};

export const REQUEST_STATUS = {
  PROGRESS: 'PROGRESS',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export const TOST_CONFIG = {
  duration: 4000, isClosable: true, status: 'success', position: 'top-right', variant: 'left-accent'
};

export const BASE_PATH = 'ui';
export const MODULE_PATH = 'shared';
export const MODULE_CIT = 'citizen';
export const MODULE_EMP = 'employee';
