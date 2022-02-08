import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FoodCardContainer, CardImage, CardButton, CardTitle } from './style';

function RecomendationFood({ food, testID, index }) {
  console.log(food);
  const { strMeal, strMealThumb, idMeal } = food;

  return (
    <FoodCardContainer
      data-testid={ testID }
    >
      <Link to={ `/foods/${idMeal}` } style={ { textDecoration: 'none' } }>
        <CardButton type="button">
          <CardImage
            data-testid={ `${index}-card-img` }
            src={ strMealThumb }
            alt={ strMeal }
          />
          <CardTitle
            data-testid={ `${index}-recipe-card` }
          >
            {strMeal}
          </CardTitle>
        </CardButton>
      </Link>
    </FoodCardContainer>

  );
}

RecomendationFood.propTypes = {
  testID: PropTypes.string.isRequired,
  food: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecomendationFood;
