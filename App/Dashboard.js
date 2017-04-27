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
    height: 100,
    backgroundColor: 'powderblue',
    flexDirection: 'row',
  },
  avatarContainer: {
    width: '30%',
    backgroundColor: '#fff',
  },
  avatar: {
    height: 100,
    width: 100,
    marginLeft: 5,
  },
  balance: {
    width: '70%',
    textAlign: 'left',
    backgroundColor: '#fff',
    padding: 10,
  },
  userName: {
    color: '#333',
    fontSize: 15,
  },
  balanceText: {
    color: '#333',
    fontSize: 60,
  },
  tilesContainer: {
    flexDirection: 'row',
    height: '42%',
  },
  tiles: {
    width: '50%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 50,
  },
  icons: {
    height: 100,
    width: 100,
  },
  links: {
    width: 100,
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 15,
  }
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
          <View style={styles.avatarContainer}>
            <Image
              source={require('./assets/Avatar.jpg')}
              style={styles.avatar}
            />
          </View>
          <View style={styles.balance}>
            <Text style={styles.userName}>Marie's Money</Text>
            <Text style={styles.balanceText}>$40.00</Text>
          </View>
        </View>
        <View style={styles.tilesContainer}>
          <TouchableHighlight
            onPress={() => navigate('Chores')}
            underlayColor="#2e6336"
            style={styles.tiles}
          >
            <View>
              <Image
                source={require('./assets/001-arrow.png')}
                style={styles.icons}
              />
              <Text style={styles.links}>Chores & Allowance</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('Account')}
            underlayColor="#2e6336"
            style={styles.tiles}
          >
            <View>
              <Image
                source={require('./assets/002-arrows.png')}
                style={styles.icons}
              />
              <Text style={styles.links}>Wishlist</Text>
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
              <Image
                source={require('./assets/003-clock.png')}
                style={styles.icons}
              />
              <Text style={styles.links}>Put Money In</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('Wishlist')}
            underlayColor="#2e6336"
            style={styles.tiles}
          >
            <View>
              <Image
                source={require('./assets/001-arrow.png')}
                style={styles.icons}
              />
              <Text style={styles.links}>Get Money Out</Text>
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
