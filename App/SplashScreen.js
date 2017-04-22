import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

class SplashScreen extends Component {
  render(){
    return (
      <View
        style={{ 
          backgroundColor: '#fff',
          flex: 1,
          }}
      >
        <Image
          source={require('./assets/Bankly_logo.png')}
          style={{ height: 140 , width: 400, marginTop: '50%' }}
        />
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center'
          }}>
          Budgeting just got fun
        </Text>
      </View>
    );
  }
}

module.exports = SplashScreen;