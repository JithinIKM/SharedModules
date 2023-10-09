/* eslint-disable no-misleading-character-class */
const generateRegex = (data = [], format = '^[data]+$') => {
  return new RegExp(format.replace('data', data.join('')), 'gs');
};

const REG_ML = '\u0D00-\u0D7F';
const REG_NUMERIC = '0-9';

export const ML = generateRegex([REG_ML]);

export const ML_NUMERIC = generateRegex([REG_ML, REG_NUMERIC]);

export const ML_SPECIAL = /^[\u0D00-\u0D7F!@#$%^&*]+$/;
export const EN_NUMERIC_SPECIAL = /^([a-zA-Z])[a-zA-Z0-9-]*$/;
export const EN = /^[A-Za-z /\s/g]*$/;
export const EN_NUMERIC = /^[A-Za-z0-9 /\s/g]*$/;
export const EN_SPECIAL = /^[a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;

export const NUMERIC = /^[0-9]*$/;
export const AADHAAR = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
export const MOBILE = /^(\+\d{1,3}[- ]?)?\d{10}$/;
export const PASSPORT = /^[A-Z]{1}[0-9]{7}$/;
export const SSN = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
export const ID_TYPE = /^[A-Za-z0-9-]{1,16}$/;

export const EN_NUMERIC_LIMITED_SPECIAL = /^[a-zA-Z0-9/\-.]+$/;
export const EN_SPECIAL_NUMERIC = /^[0-9a-zA-Z\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/;
export const ML_SPECIAL_NUMERIC = /^[0-9 \u0D00-\u0D7F /!@#$ %^&* ()_ +=\-[\]{}; ':"\\|,.<>/?]+$/;
export const POSTAL_CODE_OUTSIDE = /^[0-9/\-_.]+$/;
