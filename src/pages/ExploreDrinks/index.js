import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';

function ExploreDrinks({ history }) {
  const [randomDrinkID, setRandomDrinkID] = useState([]);
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Drinks');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  const requestRandomDrink = async () => {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  };

  const randomDrink = () => {
    history.push(`/drinks/${randomDrinkID}`);
  };

  useEffect(() => {
    requestRandomDrink().then(({ drinks }) => setRandomDrinkID(drinks[0].idDrink));
  }, []);

  return (
    <div>
      <Header />
      <Link to="/explore/drinks/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
      </Link>
      <button
        type="button"
        onClick={ randomDrink }
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ExploreDrinks;
