import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
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
         <View style={{ width: '100%', height: 50, backgroundColor: 'powderblue' }}>
           <Text>Marie's Money</Text>
          <Text>$40</Text>
        </View>
        <View style={{ flexDirection: 'row', height: '50%' }}>
          <TouchableHighlight
            onPress={() => navigate('Chores')}
            underlayColor="#2e6336"
            style={{ width: '50%', height: '100%', backgroundColor: 'red' }}
          >
            <View>
              <Text>Chores & Allowance</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('Account')}
            underlayColor="#2e6336"
            style={{ width: '50%', height: '100%', backgroundColor: 'yellow' }}
          >
            <View>
              <Text>Wishlist</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ flexDirection: 'row', height: '50%' }}>
          <TouchableHighlight
            onPress={() => navigate('Wishlist')}
            underlayColor="#2e6336"
            style={{ width: '50%', height: '100%', backgroundColor: 'green' }}
          >
            <View>
              <Text>Put Money In</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('Wishlist')}
            underlayColor="#2e6336"
            style={{ width: '50%', height: '100%', backgroundColor: 'blue' }}
          >
            <View>
              <Text>Get Money Out</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

module.exports = Dashboard;
