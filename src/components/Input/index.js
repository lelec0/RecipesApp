import React from 'react';
import PropTypes from 'prop-types';
import InputContainer from './style';

function Input({ inputValues }) {
  const { test, name, type, loginHandleChange, placeholder, value } = inputValues;

  return (
    <InputContainer
      type={ type }
      data-testid={ test }
      placeholder={ placeholder }
      name={ name }
      value={ value }
      onChange={ loginHandleChange }
      autoComplete="off"
    />
  );
}

Input.propTypes = {
  inputValues: PropTypes.shape({
    test: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    loginHandleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default Input;
