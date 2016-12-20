'use strict';

import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';
import Button from './Helpers/Button';
import Dashboard from './Dashboard';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1A5339',
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUsername(e){
    console.log('username');
    this.setState({
      username: e.nativeEvent.text
    });
  }
  handlePassword(e){
    console.log('password');
    this.setState({
      password: e.nativeEvent.text
    });
  }
  handleSubmit(){
    console.log('Submit');
    console.log(this.state);
    this.props.navigator.push({
      title: 'Dashboard',
      component: Dashboard,
      passProps: {
        username: this.state.username,
        password: this.state.password
      }
   });
  }
  render(){
    console.log('Hello from Login');
    return(
      <View style={styles.container}>
        <Button />
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleUsername.bind(this)} />
        <TextInput
          style={styles.searchInput}
          value={this.state.password}
          onChange={this.handlePassword.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Login;
