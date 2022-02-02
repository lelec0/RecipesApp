import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FoodCardContainer, CardImage, CardButton, CardTitle } from './style';

function FoodCard({ food, testID }) {
  const { strMeal, strMealThumb } = food;
  return (
    <FoodCardContainer data-testid={ `${testID}-recipe-card` }>
      {/* <Link to={ link }> */}
      <CardButton type="button">
        <CardImage
          data-testid={ `${testID}-card-img` }
          src={ strMealThumb }
          alt={ strMeal }
        />
        <CardTitle data-testid={ `${testID}-card-name` }>
          { strMeal }
        </CardTitle>
      </CardButton>
      {/* </Link> */}
    </FoodCardContainer>

  );
}

FoodCard.propTypes = {
  testID: PropTypes.number.isRequired,
  food: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodCard;
