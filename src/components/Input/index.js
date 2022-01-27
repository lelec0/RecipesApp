import React from 'react';
import PropTypes from 'prop-types';
import InputContainer from './style';

function Input({ children }) {
  const { test, name, type, handleChange } = children;
  return (
    <InputContainer
      type={ type }
      data-testid={ test }
      placeholder={ name }
      name={ name }
      onChange={ handleChange }
      id={ name }
    />
  );
}

Input.propTypes = {
  children: PropTypes.shape({
    test: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Input;
