import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Header from '../Header';
import account from '../../mock/account.json';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});

class Account extends Component {
  static navigationOptions = {
    title: 'My Money',
  };
  constructor(props) {
    super(props);
    this.state = {
      account,
    };
  }
  render() {
    const list = this.state.account.map((item, index) => {
      return item.accounts[0].transactions.map((value) => (
        <View key={index}>
          <Text>{value.transaction_type}</Text>
          <Text>${(value.amount).toFixed(2)}</Text>
          <Text>{value.category}</Text>
          <Text>{value.date}</Text>
        </View>
        ));
    });
    return (
      <View>
        <Header amount={40} />
        <ScrollView>
          {list}
        </ScrollView>
      </View>
    );
  }
}


module.exports = Account;
