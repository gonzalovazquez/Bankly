'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';
import Balance from './Balance';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#400080',
    marginTop: 65
  },
  icon: {
    width: 50,
    height: 50
  },
  name: {
    color: 'white'
  },
  balance: {
    color: 'white'
  },
  buttonText:{
    overflow: 'visible'
  }
});

class Badge extends Component {
  viewBalance(){
    console.log('Balance');
    this.props.navigator.push({
        title: 'Balance',
        component: Balance
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={require('image!avatar')}
        />
        <Text style={styles.name}>
          Stacey's Money
        </Text>
        <Text style={styles.balance}>
            $50.00
        </Text>
        <TouchableHighlight
          onPress={this.viewBalance.bind(this)}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> > </Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Badge;
