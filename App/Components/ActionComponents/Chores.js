import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Modal,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import { fetchChores } from '../../actions/chores';

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


/**
 * ChoresModal
 * @param {object} props - Properties
 */
const ChoresModal = (props) => (
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
      chores: this.props.chores,
      modalVisible: false,
    };
  }
  componentWillMount() {
    this.props.fetchChores();
  }
  render() {
    this.toggleCheckbox = (checked, index) => {
      alert(checked, index);
    };
    const onPressLearnMore = () => {
      this.setState({ modalVisible: true });
    };
    const setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
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
        <ChoresModal
          visible={this.state.modalVisible}
          setModalVisible={setModalVisible}
        />
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
          <Button
            style={styles.plusButton}
            onPress={onPressLearnMore}
            title="+"
            color="#c3c3c3"
            accessibilityLabel="New Chore"
          />
        </ScrollView>
      </View>
    );
  }
}

/**
 * Maps documentation state to parameters.
 * @param {object} - Documentation.
 */
const mapStateToProps = (state) => ({
  chores: state.chores.chores
});

export default Chores = connect(mapStateToProps, {
  fetchChores,
})(Chores);
