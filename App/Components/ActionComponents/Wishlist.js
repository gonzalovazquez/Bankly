import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Modal,
  TouchableHighlight,
  TextInput,
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
});


const stylesModal = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  labelText: {
    marginTop: '4%',
  },
  input: {
    borderColor: '#DEE0DF',
    borderRadius: 10,
    borderWidth: 2,
    height: 40,
    padding: 10,
    color: '#9B9B9B',
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
});


const WishlistModal = (props) => (
  <Modal
    animationType={'slide'}
    transparent={false}
    visible={props.visible}
  >
    <View style={stylesModal.modalContainer}>
      <Text>
        Add new wishlist item
      </Text>
      <View style={stylesModal.formContainer}>
        <Text style={stylesModal.labelText}>
          Name:
        </Text>
        <TextInput
          style={stylesModal.input}
        />
        <Text style={stylesModal.labelText}>
          Cost:
        </Text>
        <TextInput
          style={stylesModal.input}
        />
      </View>
      <TouchableHighlight
        onPress={() => { props.setModalVisible(!props.visible); }}
        style={stylesModal.button}
      >
        <Text style={stylesModal.actionText}>
          Add
        </Text>
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

WishlistModal.propTypes = {
  visible: PropTypes.bool,
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
};

module.exports = Wishlist;
