import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';

function ExploreFood() {
  const { setTitle, setBtnSearchIcon, requestRandomFood } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Foods');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <Header />
      <Link to="/explore/foods/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
      </Link>
      <Link to="/explore/foods/nationalities">
        <button
          type="button"
          data-testid="explore-by-nationality"
        >
          By Nationality
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

export default ExploreFood;
