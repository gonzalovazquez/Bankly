'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

var styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    left: 100,
    bottom: 130
  }
});

class Button extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>
          Button
        </Text>
      </View>
    )
  }
};

module.exports = Button;
