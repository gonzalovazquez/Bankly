import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
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
  DatePickerIOS
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import {
  newChore,
  fetchChores,
  updateChore,
 } from '../../actions/chores';
 import { renderField, renderCalendar } from '../utils/FormComponents';

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
  labelText: {
    marginTop: '4%',
    fontSize: 18,
    color: '#c7c7c7',
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
    marginTop: '80%',
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
      <Field
        name={'name'}
        component={renderField}
        placeholder="Chore Name"
        autoCapitalize="none"
      />
      <Text
        style={stylesModal.labelText}
      >
        Due Date:
      </Text>
      <Field
        name={'due'}
        component={renderCalendar}
        style={{ width: 300 }}
      />
      <TouchableHighlight
        onPress={props.handleSubmit(props.onSubmit)}
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
      modalVisible: false,
    };
  }
  componentWillMount() {
    this.props.fetchChores();
  }
  render() {
    const { handleSubmit } = this.props;
    const onPressLearnMore = () => {
      this.setState({ modalVisible: true });
    };
    const setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    };
    const onSubmit = (payload) => {
      //this.props.newChore(payload);
      this.setState({ modalVisible: false });
    };
    const date = new Date();
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
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
        />
        <ScrollView style={styles.choresBody}>
          {this.props.chores.map((item, index) => (
            <View key={index} style={styles.rowChore}>
              <CheckBox
                labelStyle={styles.chechbox}
                label={item.name}
                checked={item.completed}
                onChange={() => this.props.updateChore(item.id)}
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

/**
 * Register fields with form-redux.
 */
const formData = {
  form: 'Chores',
  fields: [
    'id',
    'name',
    'completed',
    'due',
  ],
};

/**
 * Hooks up Component wih redux form.
 */
Chores = reduxForm(formData)(Chores);

/**
 * Connnect to Redux.
 */
export default Chores = connect(mapStateToProps, {
  fetchChores,
  updateChore,
  newChore,
})(Chores);
