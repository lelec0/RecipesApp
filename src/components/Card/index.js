import React from 'react';
import CardContainer from './style';

function Card(objectValues) {
  const { source, alt, title, test } = objectValues;
  return (
    <CardContainer>
      <img
        data-testid={ test }
        src={ source }
        alt={ alt }
      />
      <h1>{title}</h1>
    </CardContainer>
  );
}

export default Card;
