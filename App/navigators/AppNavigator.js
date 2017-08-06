import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

// Main Components
import SplashScreen from '../Components/SplashScreen';
import LoginScreen from '../Components/Login';
import SignUpScreen from '../Components/Signup';
import Dashboard from '../Components/Dashboard';
// Action Components
import MyMoney from '../Components/ActionComponents/MyMoney';
import Chores from '../Components/ActionComponents/Chores';
import Add from '../Components/ActionComponents/Add';
import Withdraw from '../Components/ActionComponents/Withdraw';
import Wishlist from '../Components/ActionComponents/Wishlist';
import Settings from '../Components/ActionComponents/Settings';

/**
 * Define routes and screens
 */
export const AppNavigator = StackNavigator({
  Home: { screen: SplashScreen },
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

/**
 * Bind Navigation with redux
 * @param {object} dispatch - Dispatcher
 */
const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

/**
 * Bind state to props
 * @param {obect} state - nav state
 */
const mapStateToProps = state => ({
  nav: state.nav,
});


AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AppWithNavigationState);
