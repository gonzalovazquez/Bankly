import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import store from './store';
import AppWithNavigationState from './App/navigators/AppNavigator';


const Bankly = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

AppRegistry.registerComponent('Bankly', () => Bankly);