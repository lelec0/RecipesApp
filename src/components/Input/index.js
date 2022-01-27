import React from 'react';
import InputContainer from './style';

function Input(objectValues) {
  const { test, name, type, handleChange, value } = objectValues;
  return (
    <InputContainer>
      <input
        type={ type }
        data-testid={ test }
        placeholder={ name }
        name={ name }
        onChange={ handleChange }
        value={ value }
        id={ name }
      />
    </InputContainer>
  );
}

export default Input;
