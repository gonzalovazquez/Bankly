import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import Header from '../Header';
import account from '../../mock/account.json';

const styles = StyleSheet.create({
  transactions: {
    width: 58,
    height: 58,
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
      return item.accounts[0].transactions.map((value, innerIndex) => (
        <View key={innerIndex}>
          {
            (value.transaction_type === 'DEBIT') ?
              <Image
                source={require('../../assets/MyMoney/MoneyAddedIcon.png')}
                style={styles.transactions}
              /> :
              <Image
                source={require('../../assets/MyMoney/MoneyWithdrawnIcon.png')}
                style={styles.transactions}
              />
          }
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
