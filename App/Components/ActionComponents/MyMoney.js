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
  container: {
    top: 20,
    height: '100%',
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
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  left: {
    flex: 1,
    flexBasis: 100,
    paddingTop: 15,
    paddingBottom: 15,
  },
  middle: {
    flex: 2,
    flexBasis: 140,
    paddingTop: 15,
    paddingBottom: 15,
  },
  right: {
    flex: 3,
    flexBasis: 100,
    paddingTop: 15,
    paddingBottom: 15,
  },
  transactions: {
    width: 58,
    height: 58,
  },
  debit: {
    color: '#91E565',
    fontWeight: '700',
  },
  credit: {
    color: '#D0011B',
    fontWeight: '700',
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
    const list = this.state.account.map((item) => item.accounts[0].transactions.map((value, innerIndex) => (
      <View key={innerIndex} style={styles.innerContainer}>
        <View style={styles.left}>
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
        </View>
        <View style={styles.middle}>
          <Text
            style={value.transaction_type === 'DEBIT' ? styles.debit : styles.credit}
          >
              ${(value.amount).toFixed(2)}
          </Text>
          <Text>{value.category}</Text>
          <Text>{value.date}</Text>
        </View>
        <View style={styles.right}>
          <Text>${(value.amount).toFixed(2)}</Text>
        </View>
      </View>
        )));
    return (
      <View style={styles.container}>
        <Header amount={this.state.account[0].accounts[0].account.balance} />
        <ScrollView>
          {list}
        </ScrollView>
      </View>
    );
  }
}


module.exports = Account;
