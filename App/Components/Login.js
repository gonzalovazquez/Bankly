import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: '25%',
    height: 200,
    width: 200,
  },
  login: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
  button: {
    width: 287,
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#5CB247',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

/**
 * Login Component
 * @class Login
 * @extends {Component}
 */
class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/Banky_logo_2.png')}
          style={styles.logo}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.signIn}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate('SignUp')}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>
            Sign Up
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

module.exports = Login;
