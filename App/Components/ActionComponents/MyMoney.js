import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';

import Header from '../Header';

class Account extends Component {
  static navigationOptions = {
    title: 'My Money',
  };
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
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
