import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Withdraw extends Component {
  static navigationOptions = {
    title: 'Withdraw',
  };
  render() {
    return (
      <View>
        <Text>Withdraw</Text>
      </View>
    );
  }
}

module.exports = Withdraw;
