/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
//import { createLogger } from 'redux-logger';
import user from './App/reducers/user';
import nav from './App/reducers/nav';

/**
 * Defining all reducers
 */
const reducers = {
  user,
  nav,
};

/**
 * Create store with reducers, routing, logger and thunk
 */
const store = createStore(
  combineReducers({ ...reducers, }),
);

export default store;
/* eslint-enable */