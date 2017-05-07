import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Add extends Component {
  static navigationOptions = {
    title: 'Add',
  };
  render() {
    return (
      <View>
        <Text>Add Money</Text>
      </View>
    );
  }
}

module.exports = Add;
