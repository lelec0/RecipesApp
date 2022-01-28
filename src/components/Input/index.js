import React from 'react';
import PropTypes from 'prop-types';
import InputContainer from './style';

function Input({ inputValues }) {
  const { test, name, type, handleChange } = inputValues;

  return (
    <InputContainer
      type={ type }
      data-testid={ test }
      placeholder={ name }
      name={ name }
      onChange={ handleChange }
    />
  );
}

Input.propTypes = {
  inputValues: PropTypes.shape({
    test: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Input;
