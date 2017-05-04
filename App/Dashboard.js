import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Components/Header';

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
    height: 104,
    width: 130,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#B9B9B9",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  links: {
    paddingTop: 10,
    fontSize: 16,
    color: '#9B9B9B',
    textAlign: 'center',
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
        <Header />
        <View style={styles.innerContainer}>
          <View style={styles.tilesContainer}>
            <TouchableHighlight
              onPress={() => navigate('Chores')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('./assets/Dashboard/MyMoneyIcon.png')}
                    style={{  height: 94, width: 122, marginLeft: 4 }}
                  />
                </View>
                <Text style={styles.links}>My Money</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigate('Account')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('./assets/Dashboard/ChoresIcon.png')}
                    style={{  height: 102, width: 110, marginLeft: 10 }}
                  />
                </View>
                <Text style={styles.links}>Chores</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.tilesContainer}>
            <TouchableHighlight
              onPress={() => navigate('Wishlist')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('./assets/Dashboard/MoneyAddIcon.png')}
                    style={{  height: 90, width: 116, marginLeft: 10, marginTop: 8 }}
                  />
                </View>
                <Text style={styles.links}>Add</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigate('Wishlist')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('./assets/Dashboard/MoneyWithdrawIcon.png')}
                    style={{  height: 90, width: 124, marginLeft: 2, marginTop: 8 }}
                  />
                </View>
                <Text style={styles.links}>Withdraw</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.tilesContainer}>
            <TouchableHighlight
              onPress={() => navigate('Wishlist')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('./assets/Dashboard/WishlistIcon.png')}
                    style={{  height: 100, width: 89, marginLeft: 28 }}
                  />
                </View>
                <Text style={styles.links}>Wishlist</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigate('Wishlist')}
              underlayColor="#B9B9B9"
              style={styles.tiles}
            >
              <View style={styles.button}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('./assets/Dashboard/SettingsIcon.png')}
                    style={{  height: 100, width: 100, marginLeft: 14 }}
                  />
                </View>
                <Text style={styles.links}>Settings</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

module.exports = Dashboard;
