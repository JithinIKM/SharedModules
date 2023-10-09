import _ from 'lodash';
import { all, fork } from 'redux-saga/effects';

import * as commonModules from 'pages';

const sagas = [];

// Here you can include all the saga which you write for components
_.values({ ...commonModules }).forEach((module) => {
  _.values(module).forEach((subModule) => {
    if (_.has(subModule, 'STATE_REDUCER_KEY') && _.has(subModule, 'saga')) {
      sagas.push(fork(subModule.saga));
    }
  });
});

export { sagas };

export default function* rootSaga() {
  yield all([...sagas]);
}
