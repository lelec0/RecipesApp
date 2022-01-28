import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FoodCardContainer, CardImage, CardButton, CardTitle } from './style';

function FoodCard({ foods }) {
  const { strMeal, strMealThumb } = foods;
  return (
    <FoodCardContainer>
      {/* <Link to={ link }> */}
      <CardButton type="button">
        <CardImage
          src={ strMealThumb }
          alt={ strMealThumb }
        />
        <CardTitle>
          { strMeal }
        </CardTitle>
      </CardButton>
      {/* </Link> */}
    </FoodCardContainer>

  );
}

FoodCard.propTypes = {
  foods: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodCard;
