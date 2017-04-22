import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './App/SplashScreen';
import Dashboard from './App/Dashboard';
import Chores from './App/Components/Chores';
import Account from './App/Components/Account';
import Wishlist from './App/Components/Wishlist';

const Bankly = StackNavigator({
  Home: { screen: SplashScreen },
  Chores: { screen: Chores },
  Account: { screen: Account },
  Wishlist: { screen: Wishlist }
});

AppRegistry.registerComponent('Bankly', () => Bankly);