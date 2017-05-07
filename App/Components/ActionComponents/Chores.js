import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Chores extends Component {
  static navigationOptions = {
    title: 'Chores',
  };
  render() {
    return (
      <View>
        <Text>Chores</Text>
      </View>
    );
  }
}

module.exports = Chores;
