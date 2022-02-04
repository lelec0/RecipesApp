import React, { useContext, useEffect } from 'react';
import { Header } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { DoneRecipesContainer, DoneRecipesTitle } from './style';

function DoneRecipes() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Done Recipes');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <DoneRecipesContainer>
      <Header />
      <DoneRecipesTitle>
        Done Recipes Title
      </DoneRecipesTitle>
    </DoneRecipesContainer>
  );
}

export default DoneRecipes;
