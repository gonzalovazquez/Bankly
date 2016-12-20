'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

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
      <Image
        style={styles.icon}
        source={require('image!td-logo')}
      />
    )
  }
};

module.exports = Button;
