import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import RecipesContext from '../../context/RecipesContext';
import { FavoriteRecipesContainer, FavoriteRecipesTitle } from './style';

function FavoriteRecipes() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Favorite Recipes');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <FavoriteRecipesContainer>
      <Header />
      <FavoriteRecipesTitle>
        Favorite Recipes
      </FavoriteRecipesTitle>
    </FavoriteRecipesContainer>
  );
}

export default FavoriteRecipes;
