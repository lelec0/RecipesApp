import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';
import {
  ExploreDrinksIngredientsContainer,
  ExploreDrinksIngredientsTitle,
} from './style';

function ExploreDrinksIngredients() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Explore Ingredients');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <ExploreDrinksIngredientsContainer>
      <Header />
      <ExploreDrinksIngredientsTitle>
        Explore Drinks Ingredients
      </ExploreDrinksIngredientsTitle>
      <Footer />
    </ExploreDrinksIngredientsContainer>
  );
}

export default ExploreDrinksIngredients;
