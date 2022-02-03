import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';

function ExploreDrinks() {
  const { setTitle, setBtnSearchIcon, requestRandomDrink } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Drinks');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  const randomDrink = () => {
    // criar aqui a funcao que redireciona para randomDrinks
  }

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

export default ExploreDrinks;
