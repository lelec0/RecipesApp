import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DrinkCardContainer, CardImage, CardButton, CardTitle } from './style';

function DrinkCard({ drinks, testID }) {
  const { strDrink, strDrinkThumb, idDrink } = drinks;
  return (
    <DrinkCardContainer data-testid={ `${testID}-recipe-card` }>
      <Link to={ `/drinks/${idDrink}` }>
        <CardButton type="button">
          <CardImage
            data-testid={ `${testID}-card-img` }
            src={ strDrinkThumb }
            alt={ strDrink }
          />
          <CardTitle data-testid={ `${testID}-card-name` }>
            { strDrink }
          </CardTitle>
        </CardButton>
      </Link>
    </DrinkCardContainer>

  );
}

DrinkCard.propTypes = {
  testID: PropTypes.number.isRequired,
  drinks: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default DrinkCard;
