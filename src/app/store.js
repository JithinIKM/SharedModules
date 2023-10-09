import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-named-as-default
import rootReducer from './rootReducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [];
middleWares.push(sagaMiddleware);

if (import.meta.env.MODE === 'development') {
  middleWares.push(logger);
}

const reducers = combineReducers({
  ...rootReducer
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: middleWares
});

sagaMiddleware.run(rootSaga);
