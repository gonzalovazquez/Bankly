import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import chores from '../../mock/chores.json';

const styles = StyleSheet.create({
  container: {
    top: 20,
    height: '94%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#B9B9B9',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  header: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: '600',
    width: '40%',
    paddingLeft: 20,
    paddingTop: 10,
  },
  imageHeader: {
    width: '50%',
    paddingLeft: 16,
  },
});

class Chores extends Component {
  static navigationOptions = {
    title: 'Chores',
  };
  constructor(props) {
    super(props);
    this.state = {
      chores,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Chores</Text>
          <View style={styles.imageHeader}>
            <Image
              source={require('../../assets/AddMoney/coinrow_1.png')}
              style={{ height: 36, width: '100%' }}
            />
          </View>
          <View>
            {this.state.chores.map((item, index) => (
              <Text key={index}>{item.name}</Text>
            ))}
          </View>
        </View>
      </View>
    );
  }
}


module.exports = Chores;
