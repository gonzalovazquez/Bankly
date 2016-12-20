'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, NavigatorIOS, Text } from 'react-native';
import Login from './Login';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A5339',
  },
  icon: {
    width: 150,
    height: 150
  },
  title:{
    fontSize: 30,
    color: 'white'
  }
});

class Logo extends Component {
  onPressTitle(){
    this.props.navigator.push({
      title: 'Login',
      component: Login
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={require('image!td-logo')}
        />
        <Text
          style={styles.title}
          onPress={this.onPressTitle.bind(this)}>
          For Kids!
        </Text>
      </View>
    )
  }
};

module.exports = Logo;
