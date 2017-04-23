import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A5339',
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: 'powderblue',
  },
  tilesContainer: {
    flexDirection: 'row',
    height: '40%',
    marginTop: '10%',
  },
  tiles: {
    width: '50%',
    height: '100%',
    backgroundColor: 'red',
  },
  avatar: {
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
        <View style={styles.header}>
          <Image
            source={require('./assets/Avatar.jpg')}
            style={styles.avatar}
          />
          <Text>Marie's Money</Text>
          <Text>$40</Text>
        </View>
        <View style={styles.tilesContainer}>
          <TouchableHighlight
            onPress={() => navigate('Chores')}
            underlayColor="#2e6336"
            style={styles.tiles}
          >
            <View>
              <Text>Chores & Allowance</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('Account')}
            underlayColor="#2e6336"
            style={styles.tiles}
          >
            <View>
              <Text>Wishlist</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.tilesContainer}>
          <TouchableHighlight
            onPress={() => navigate('Wishlist')}
            underlayColor="#2e6336"
            style={styles.tiles}
          >
            <View>
              <Text>Put Money In</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('Wishlist')}
            underlayColor="#2e6336"
            style={styles.tiles}
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
