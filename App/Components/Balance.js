'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A5339',
  }
});

class Balance extends React.Component{
    return(){
      return(
        <View style={styles.container}>
          <Text>Balance</Text>
        </View>
      )
    }
};

module.exports = Balance;
