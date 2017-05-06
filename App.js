import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './App/SplashScreen';
import LoginScreen from './App/Components/Login';
import SignUpScreen from './App/Components/Signup';
import Dashboard from './App/Components/Dashboard';
import Chores from './App/Components/Chores';
import Account from './App/Components/Account';
import Wishlist from './App/Components/Wishlist';

const Bankly = StackNavigator({
  //Home: { screen: SplashScreen },
  Home: { screen: LoginScreen },
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen },
  Dashboard: { screen: Dashboard },
  Chores: { screen: Chores },
  Account: { screen: Account },
  Wishlist: { screen: Wishlist },
});

AppRegistry.registerComponent('Bankly', () => Bankly);