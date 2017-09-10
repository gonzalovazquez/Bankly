/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import user from './App/reducers/user';
import nav from './App/reducers/nav';
import chores from './App/reducers/chores';
import { reducer as form } from 'redux-form';

/**
 * Defining all reducers
 */
const reducers = {
  user,
  nav,
  form,
  chores,
};

/**
 * Create store with reducers, routing, logger and thunk
 */
const store = createStore(
  combineReducers({ ...reducers, }),
  applyMiddleware(
    thunk,
    createLogger()
  )
);

export default store;
/* eslint-enable */