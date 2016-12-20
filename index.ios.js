/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, NavigatorIOS, Text } from 'react-native';
import Logo from './App/Components/Logo';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A5339',
  }
});

class Bankly extends Component {
  render(){
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute = {{
          title: 'Welcome',
          component: Logo,
        }}
      />
    )
  }
};

AppRegistry.registerComponent('Bankly', () => Bankly);
