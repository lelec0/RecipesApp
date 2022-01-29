import React from 'react';
import { Link } from 'react-router-dom';
import FooterContainer from './style';
import drinkicon from '../../assets/images/drinkIcon.svg';
import exploreIcon from '../../assets/images/exploreIcon.svg';
import mealIcon from '../../assets/images/mealIcon.svg';

function Footer() {
  return (
    <FooterContainer data-testid="footer">
      <Link to="/drinks">
        <button type="button">
          <img data-testid="drinks-bottom-btn" src={ drinkicon } alt="drinks icon" />
        </button>
      </Link>
      <Link to="/explore">
        <button type="button">
          <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="explore icon" />
        </button>
      </Link>
      <Link to="/foods">
        <button type="button">
          <img data-testid="food-bottom-btn" src={ mealIcon } alt="meal icon" />
        </button>
      </Link>
    </FooterContainer>

  );
}

export default Footer;
