import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FoodContainer from './style';

function FoodCard({ children }) {
  const { test, imgSrc, imagAlt, link } = children;
  return (
    <FoodContainer>
      <Link to={ link }>
        <button type="button">
          <img data-testid={ test } src={ imgSrc } alt={ imagAlt } />
        </button>
      </Link>
    </FoodContainer>

  );
}

FoodCard.propTypes = {
  children: PropTypes.shape({
    test: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imagAlt: PropTypes.string.isRequired,
    link: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FoodCard;
