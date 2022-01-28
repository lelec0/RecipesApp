import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './style';

function Button({ category }) {
  return (
    <ButtonContainer
      type="button"
      // onClick={ handleClick }
    >
      { category }
    </ButtonContainer>
  );
}

Button.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Button;
