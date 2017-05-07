import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Account extends Component {
  static navigationOptions = {
    title: 'My Money',
  };
  render() {
    return (
      <View>
        <Text>$80</Text>
      </View>
    );
  }
}

module.exports = Account;
