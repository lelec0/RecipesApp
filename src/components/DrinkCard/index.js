import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DrinkCardContainer, CardImage, CardButton, CardTitle } from './style';

function DrinkCard({ drinks }) {
  const { strDrink, strDrinkThumb } = drinks;
  return (
    <DrinkCardContainer>
      {/* <Link to={ link }> */}
      <CardButton type="button">
        <CardImage
          src={ strDrinkThumb }
          alt={ strDrink }
        />
        <CardTitle>
          { strDrink }
        </CardTitle>
      </CardButton>
      {/* </Link> */}
    </DrinkCardContainer>

  );
}

DrinkCard.propTypes = {
  drinks: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default DrinkCard;
