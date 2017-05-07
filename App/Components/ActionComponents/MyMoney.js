import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView, 
} from 'react-native';

import Header from '../Header';

class Account extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  static navigationOptions = {
    title: 'My Money',
  };
  render() {
    return (
      <View>
        <Header amount={40} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}


module.exports = Account;
