import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { renderField, validate } from './utils/FormComponents';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: '20%',
    height: 200,
    width: 200,
  },
  signInForm: {
    marginBottom: 20,
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
 * Component for SignUp
 * @class Signup
 * @extends {Component}
 */
class Signup extends Component {
  /**
   * Fires event to onboard Client
   * @param {object} payload - Client information.
   */
  onSubmit(payload) {
    alert(payload);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/Banky_logo_2.png')}
          style={styles.logo}
        />
        <View style={styles.signInForm}>
          <Field
              name={'username'}
              component={renderField}
              placeholder="Username"
              autoCapitalize="none"
            />
          <Field
            name={'email'}
            component={renderField}
            placeholder="Email"
            autoCapitalize="none"
          />
          <Field
            name={'password'}
            component={renderField}
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
          />
          <Field
            name={'password'}
            component={renderField}
            placeholder="Retype Password"
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate('SignUp')}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

/**
 * Register fields with form-redux.
 */
const formData = {
  form: 'Register',
  fields: [
    'username',
    'email',
    'password',
  ],
  validate,
};

Signup.propTypes = {
  navigation: PropTypes.object.isRequired,
};

/**
 * Connect component to Redux Form.
 */
export default reduxForm(formData)(Signup);
