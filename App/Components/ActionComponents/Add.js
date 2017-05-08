import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    top: 20,
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#B9B9B9',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
});

class Add extends Component {
  static navigationOptions = {
    title: 'Add Money',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Add</Text>
      </View>
    );
  }
}


module.exports = Add;
