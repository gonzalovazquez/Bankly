import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  innerPadding: {
    padding: '10px 0 10px 0',
  },
  padding: {
    padding: '10px 0 10px 0',
  },
};

/**
 * Renders a input field with extra features.
 * @param {DomElement} input - Input element.
 * @param {DomElement} label - Label.
 * @param {string} type - Type of input.
 * @param {object} meta - Validation information.
 * @param {string} placeholder - Placeholder text.
 * @return {ReactElement} markup.
 */
export const renderField = ({ input, label, type, meta: { touched, error, warning }, placeholder }) => (
  <div style={styles.innerPadding}>
    <label htmlFor={input.name}>{label}</label>
    <div>
      <input {...input} type={type} style={{ marginBottom: '0px' }} placeholder={placeholder} />
      {touched &&
        ((error && <span className="red-text text-darken-4">{error}</span>)
        || (warning && <span>{warning}</span>))
      }
    </div>
  </div>
);

/**
 * propTypes
 * @property {object} input - DOM element
 * @property {string} label - DOM element
 * @property {string} type - Type of input
 * @property {object} meta - Validation information.
 * @property {string} placeholder - Placeholder text
 */
renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
};