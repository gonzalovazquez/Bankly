import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  input: {
    height: 30,
    padding: 5,
    width: 300,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginTop: 20,
  },
  valid: {
    borderColor: '#53E69D',
  },
  invalid: {
    borderColor: '#F55E64',
  },
});

/**
 * Renders a input field with extra features.
 * @param {DomElement} input - Input element.
 * @param {DomElement} inputProps - Input children.
 * @param {object} meta - Validation information.
 * @param {string} placeholder - Placeholder text.
 * @param {bool} secureTextEntry - Secure Text Entry.
 * @param {string} autoCapitalize - Auto Capitalization.
 * @return {ReactElement} markup.
 */
export function renderField(props) {
  const { input, meta, ...inputProps } = props;
  const validationStyles = meta.touched && !meta.active
  ? meta.valid ? styles.valid : styles.invalid
  : null;
  return (
    <View style={[styles.inputContainer, validationStyles]}>
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

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@((?:[a-z0-9-]*)?\.)+(?:[A-Z]{2}|com)/;

/**
 * Validates form
 * @param {object} values - Form
 */
export function validate(values) {
  const errors = {};
  errors.email = !values.email
    ? 'Email field is required'
    : !emailRegex.test(values.email)
    ? 'Email format is invalid'
    : undefined;

  errors.password = !values.password
    ? 'Password field is required'
    : values.password.length < 8
    ? 'Password must be at least 8 characters long'
    : undefined;

  return errors;
}

/**
 * propTypes
 * @property {object} input - DOM element
 * @property {string} label - DOM element
 * @property {string} type - Type of input
 * @property {object} meta - Validation information.
 * @property {boolean} secureTextEntry - Enable secure text entry
 * @property {string} autoCapitalize - Enable autocapitalization
 * @property {string} placeholder - Placeholder text
 */
renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  secureTextEntry: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  placeholder: PropTypes.string,
};
