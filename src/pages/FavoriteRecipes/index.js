import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import RecipesContext from '../../context/RecipesContext';

function FavoriteRecipes() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Favorite Recipes');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <Header />
    </div>
  );
}

export default FavoriteRecipes;
