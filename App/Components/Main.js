'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A5339',
  }
});

class Main extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text> Hello from Main </Text>
      </View>
    )
  }
};

module.exports = Main;
