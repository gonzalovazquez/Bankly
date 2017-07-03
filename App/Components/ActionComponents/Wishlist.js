import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Modal,
  TouchableHighlight,
} from 'react-native';

import PropTypes from 'prop-types';

import wishlist from '../../mock/wishlist.json';

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
  wishlistBody: {
    marginLeft: 20,
    marginRight: 20,
  },
  rowChore: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  plusButton: {
    borderStyle: 'solid',
    borderRadius: 5,
    borderColor: '#000',
  },
  modalContainer: {

  },
});

const WishlistModal = (props) => (
  <Modal
    animationType={'slide'}
    transparent={false}
    visible={props.visible}
  >
    <View style={styles.modalContainer}>
      <Text>
        Hello World
      </Text>
      <TouchableHighlight
        onPress={() => { props.setModalVisible(!props.visible); }}
      >
        <Text>Add item</Text>
      </TouchableHighlight>
    </View>
  </Modal>
);

class Wishlist extends Component {
  static navigationOptions = {
    title: 'Wishlist',
  };
  constructor(props) {
    super(props);
    this.state = {
      wishlist,
      modalVisible: false,
    };
  }
  render() {
    const onPressLearnMore = () => {
      this.setState({ modalVisible: true });
    };
    const setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    };
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Wishlist</Text>
        </View>
        <WishlistModal
          visible={this.state.modalVisible}
          setModalVisible={setModalVisible}
        />
        <ScrollView style={styles.wishlistBody}>
          {this.state.wishlist.map((item, index) => (
            <View key={index} style={styles.rowChore}>
              <Text>{item.name} | ${item.cost}</Text>
            </View>
          ))}
          <Button
            style={styles.plusButton}
            onPress={onPressLearnMore}
            title="+"
            color="#c3c3c3"
            accessibilityLabel="Add Wishlist"
          />
        </ScrollView>
      </View>
    );
  }
}

Wishlist.propTypes = {
  visible: PropTypes.bool,
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
};

module.exports = Wishlist;
