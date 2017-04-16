import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A5339',
  },
  icon: {
    height: 50,
    width: 50,
  },
});

class Dashboard extends Component {
  static navigationOptions = {
    title: 'Bankly',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
         <View style={{width: '100%', height: 50, backgroundColor: 'powderblue'}}>
           <Text>Marie's Money</Text>
          <Text>$40</Text>
        </View>
        <TouchableHighlight
          onPress={() => navigate('Chores')}
          underlayColor="#2e6336"
        >
          <View>
            <Text>Chores & Allowance</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate('Account')}
          underlayColor="#2e6336"
        >
          <View>
            <Text>Account</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate('Wishlist')}
          underlayColor="#2e6336"
        >
          <View>
            <Text>Wishlist</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

module.exports = Dashboard;
