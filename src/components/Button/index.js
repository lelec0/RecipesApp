import React from 'react';
import ButtonContainer from './style';

export default function index(objectValues) {
  const { test, name } = objectValues;
  return (
    <ButtonContainer>
      <button
        data-testid={ test }
        type="button"
      >
        { name }
      </button>
    </ButtonContainer>
  );
}
