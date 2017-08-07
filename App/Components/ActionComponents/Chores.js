import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import CheckBox from 'react-native-checkbox';

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
  choresBody: {
    marginLeft: 20,
    marginRight: 20,
  },
  rowChore: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  chechbox: {
    color: '#4A4A4A',
    fontSize: 16,
  },
  rowDeadline: {
    color: '#9B9B9B',
    fontSize: 14,
  },
});

/**
 * Chores Component
 * @class Chores
 * @extends {Component}
 */
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
    this.toggleCheckbox = (checked, index) => {
      // alert(checked, index);
    };
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
        </View>
        <ScrollView style={styles.choresBody}>
          {this.state.chores.map((item, index) => (
            <View key={index} style={styles.rowChore}>
              <CheckBox
                labelStyle={styles.chechbox}
                label={item.name}
                checked={item.completed}
                onChange={(checked) => this.toggleCheckbox(checked, index)}
              />
              <Text style={styles.rowDeadline}>By: {item.due}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}


module.exports = Chores;
