import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { ExploreFoodIngredientsContainer, ExploreFoodIngredientsTitle } from './style';

function ExploreFoodsIngredients() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Explore Ingredients');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <ExploreFoodIngredientsContainer>
      <Header />
      <ExploreFoodIngredientsTitle>
        Explore Foods Ingredients
      </ExploreFoodIngredientsTitle>
      <Footer />
    </ExploreFoodIngredientsContainer>
  );
}

export default ExploreFoodsIngredients;
