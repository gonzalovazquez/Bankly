import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

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
    width: '55%',
    paddingLeft: 20,
    paddingTop: 10,
  },
  imageHeader: {
    width: '38%',
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: '#4A4A4A',
  },
  input: {
    borderColor: '#DEE0DF',
    borderRadius: 10,
    borderWidth: 2,
    height: 40,
    padding: 10,
    color: '#9B9B9B',
  },
  centerItems: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5CB247',
    width: 175,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  actionText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  quote: {
    color: '#4A4A4A',
    width: 220,
    paddingTop: 20,
    fontStyle: 'italic',
  },
});

/**
 * Withdraw Component
 * @class Withdraw
 * @extends {Component}
 */
class Withdraw extends Component {
  static navigationOptions = {
    title: 'Withdraw Money',
  };
  constructor(props) {
    super(props);
    this.state = {
      category: 'Gift, lunch money, chores, etc',
      amount: 'eg. 10',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Withdraw Money</Text>
          <View style={styles.imageHeader}>
            <Image
              source={require('../../assets/WithdrawMoney/coinrow_2.png')}
              style={{ height: 38, width: '100%' }}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textInput}> Category: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(category) => this.setState({ category })}
            value={this.state.category}
          />
          <Text style={styles.textInput}> Amount: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(amount) => this.setState({ amount })}
            value={this.state.amount}
          />
        </View>
        <View style={styles.centerItems}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.actionText}>
              Withdraw
            </Text>
          </TouchableOpacity>
          <Text style={styles.quote}>
          “A simple fact that is hard to learn is that the time to
          save money is when you have some.” -Joe Moore
          </Text>
          <Image
            source={require('../../assets/WithdrawMoney/SparkleMoney.png')}
            style={{ height: '36%', width: '100%', resizeMode: 'contain', marginTop: 10 }}
          />
        </View>
      </View>
    );
  }
}


module.exports = Withdraw;
