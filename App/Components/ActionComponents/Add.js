import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

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
  input: {
    borderColor: '#DEE0DF',
    borderRadius: 10,
    borderWidth: 2,
    height: 40,
    padding: 10,
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
  },
  actionText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  quote: {
    color: '#4A4A4A',
  },
});

class Add extends Component {
  static navigationOptions = {
    title: 'Add Money',
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
        <Text>Add Money</Text>
        <Text> Category: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(category) => this.setState({category})}
          value={this.state.category}
        />
        <Text> Amount: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(amount) => this.setState({amount})}
          value={this.state.amount}
        />
        <View style={styles.centerItems}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.actionText}>
              Add
            </Text>
          </TouchableOpacity>
          <Text style={styles.quote}>
            “Never spend your money before you have earned it.”
          </Text>
        </View>
      </View>
    );
  }
}


module.exports = Add;
