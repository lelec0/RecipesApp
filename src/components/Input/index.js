import React from 'react';

function Input(objectValues) {
  const { test, name, handleChange, value } = objectValues;
  return (
    <input
      data-testid={ test }
      placeholder={ name }
      name={ name }
      onChange={ handleChange }
      value={ value }
      id={ name }
    />
  );
}

export default Input;
