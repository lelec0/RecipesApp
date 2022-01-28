import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './style';

function Button({ children }) {
  const { test, name, disabled } = children;
  return (
    <ButtonContainer
      data-testid={ test }
      type="button"
      disabled={ disabled }
    >
      { name }
    </ButtonContainer>
  );
}

Button.propTypes = {
  children: PropTypes.shape({
    test: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Button;
