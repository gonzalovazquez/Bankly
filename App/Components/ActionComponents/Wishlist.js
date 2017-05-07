import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Wishlist extends Component {
  static navigationOptions = {
    title: 'Wishlist',
  };
  render() {
    return (
      <View>
        <Text>Wishlist</Text>
      </View>
    );
  }
}

module.exports = Wishlist;
