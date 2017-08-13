import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  innerContainer: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
  },
  tilesContainer: {
    flexDirection: 'row',
  },
  tiles: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  iconContainer: {
    height: 106,
    width: 130,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#B9B9B9',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  links: {
    marginTop: 10,
    fontSize: 16,
    color: '#9B9B9B',
    textAlign: 'center',
  },
});

/**
 * Dashboard Component
 * @class Dashboard
 * @extends {Component}
 */
class Dashboard extends Component {
  static navigationOptions = {
    title: 'Bankly',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header amount={40} />
        <View style={styles.innerContainer}>
          <View style={styles.tilesContainer}>
            <TouchableOpacity
              onPress={() => navigate('MyMoney')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../assets/Dashboard/MyMoneyIcon.png')}
                    style={{ height: 94, width: 122, marginLeft: 4 }}
                  />
                </View>
                <Text style={styles.links}>My Money</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Chores')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../assets/Dashboard/ChoresIcon.png')}
                    style={{ height: 102, width: 110, marginLeft: 10 }}
                  />
                </View>
                <Text style={styles.links}>Chores</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tilesContainer}>
            <TouchableOpacity
              onPress={() => navigate('Add')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../assets/Dashboard/MoneyAddIcon.png')}
                    style={{ height: 90, width: 116, marginLeft: 10, marginTop: 8 }}
                  />
                </View>
                <Text style={styles.links}>Add</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Withdraw')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../assets/Dashboard/MoneyWithdrawIcon.png')}
                    style={{ height: 90, width: 124, marginLeft: 2, marginTop: 8 }}
                  />
                </View>
                <Text style={styles.links}>Withdraw</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tilesContainer}>
            <TouchableOpacity
              onPress={() => navigate('Wishlist')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../assets/Dashboard/WishlistIcon.png')}
                    style={{ height: 100, width: 89, marginLeft: 28 }}
                  />
                </View>
                <Text style={styles.links}>Wishlist</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Settings')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../assets/Dashboard/SettingsIcon.png')}
                    style={{ height: 100, width: 100, marginLeft: 14 }}
                  />
                </View>
                <Text style={styles.links}>Settings</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

/**
 * propTypes
 * @property {object} navigation - Navigation screens
 */
Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

module.exports = Dashboard;
