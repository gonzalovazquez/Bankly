'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';
import Badge from './Badge';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A5339',
  },
  icon: {
    height: 50,
    width: 50
  }
})

class Dashboard extends Component {
  viewChores(){
    console.log('Hello from Chores');
  }
  viewWishlist(){
    console.log('Wishlist');
  }
  viewCredit(){
    console.log('credit');
  }
  viewDeposit(){
    console.log('deposit');
  }
  render(){
    return(
      <View style={styles.container}>
        <Badge />
        <TouchableHighlight
          onPress={this.viewChores.bind(this)}
          underlayColor="#2e6336">
          <View>
            <Image
              style={styles.icon}
              source={require('image!chores')}
            />
            <Text> Chores & Allowance</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.viewWishlist.bind(this)}
          underlayColor="#2e6336">
          <View>
            <Image
              style={styles.icon}
              source={require('image!wishlist')}
            />
            <Text> Wishlist</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.viewCredit.bind(this)}
          underlayColor="#2e6336">
          <View>
            <Image
              style={styles.icon}
              source={require('image!credit')}
            />
            <Text> Put Money In</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.viewDeposit.bind(this)}
          underlayColor="#2e6336">
          <View>
            <Image
              style={styles.icon}
              source={require('image!deposit')}
            />
            <Text> Get Money Out</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Dashboard;
