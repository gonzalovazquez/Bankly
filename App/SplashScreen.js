import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  logo: {
    height: 140,
    width: 400,
    marginTop: '50%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

class SplashScreen extends Component {
  componentDidMount() {
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate('Dashboard');
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/Bankly_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>
          Budgeting just got fun
        </Text>
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

module.exports = SplashScreen;
