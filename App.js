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
// Action Components
import MyMoney from './App/Components/ActionComponents/MyMoney';
import Chores from './App/Components/ActionComponents/Chores';
import Add from './App/Components/ActionComponents/Add';
import Withdraw from './App/Components/ActionComponents/Withdraw';
import Wishlist from './App/Components/ActionComponents/Wishlist';
import Settings from './App/Components/ActionComponents/Settings';



const Bankly = StackNavigator({
  //Home: { screen: SplashScreen },
  Home: { screen: LoginScreen },
  // User Authenticated
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen },
  Dashboard: { screen: Dashboard },
  // Action Components
  MyMoney: { screen: MyMoney },
  Chores: { screen: Chores },
  Add: { screen: Add },
  Withdraw: { screen: Withdraw },
  Wishlist: { screen: Wishlist },
  Settings: { screen: Settings },
});

AppRegistry.registerComponent('Bankly', () => Bankly);