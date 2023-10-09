import { createSelector } from 'reselect';

export const flattenObject = (obj, { parentKey = '', parentMapping = true } = {}) => {
  const result = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
        // Recursively flatten nested objects
        Object.assign(result, flattenObject(obj[key], { parentKey: newKey, parentMapping }));
      } else {
        // Assign the flattened key-value pair
        let value = obj[key];
        if (typeof obj[key] === 'boolean') {
          value = obj[key] ? 'Yes' : 'No';
        }
        result[parentMapping ? newKey : key] = value;
      }
    }
  }
  return result;
};

export const selectorWithKey = createSelector(
  [
    (state) => state,
    (_state, key) => key
  ],
  (items, category) => {
    return items[category];
  }
);

export const calculateAccordionIndex = (data) => data.reduce((acc, item, index) => {
  acc[item.id] = index;
  return acc;
}, {});
