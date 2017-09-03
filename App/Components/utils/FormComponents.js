import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  input: {
    height: 30,
    padding: 5,
    width: 300
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginTop: 20
  },
  valid: {
    borderColor: '#53E69D'
  },
  invalid: {
    borderColor: '#F55E64'
  },
});

/**
 * Renders a input field with extra features.
 * @param {DomElement} input - Input element.
 * @param {DomElement} label - Label.
 * @param {string} type - Type of input.
 * @param {object} meta - Validation information.
 * @param {string} placeholder - Placeholder text.
 * @return {ReactElement} markup.
 */
export default function MyTextInput(props) {
  const { input, ...inputProps } = props;
  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize={props.autoCapitalize}
        style={styles.input}
        />
    </View>
  );
}

/**
 * propTypes
 * @property {object} input - DOM element
 * @property {string} label - DOM element
 * @property {string} type - Type of input
 * @property {object} meta - Validation information.
 * @property {string} placeholder - Placeholder text
 */
MyTextInput.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
};