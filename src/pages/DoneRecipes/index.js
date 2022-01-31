import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import RecipesContext from '../../context/RecipesContext';

function DoneRecipes() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Done Recipes');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <Header />
    </div>
  );
}

export default DoneRecipes;
