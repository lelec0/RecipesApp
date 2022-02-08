import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import StartRecipeButton from './style';

function foodsStorage(storage, type, id) {
  if (storage && type === 'foods') {
    const findFoodnOnStorage = Object.keys(storage.meals)
      .find((foodStoreKey) => foodStoreKey === id);
    return findFoodnOnStorage !== undefined;
  }
  if (storage && type === 'drinks') {
    const findDrinkOnStorage = Object.keys(storage.cocktails)
      .find((drinkStoreKey) => drinkStoreKey === id);
    return findDrinkOnStorage !== undefined;
  }
  return false;
}

function RecipeButton({ type, id, linkCopied }) {
  console.log(linkCopied);
  const [inProgress, setInProgress] = useState(false);
  const [inProgressFoodRecipeLoad, setInProgressFoodRecipeLoad] = useState(false);
  const [inProgressDrinkRecipeLoad, setInProgressDrinkRecipeLoad] = useState(false);
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setInProgress(foodsStorage(storage, type, id));
  }, [id, type]);

  const handleClick = () => {
    if (type === 'foods') setInProgressFoodRecipeLoad(true);
    if (type === 'drinks') setInProgressDrinkRecipeLoad(true);
  };

  return (
    <>
      <StartRecipeButton
        type="button"
        data-testid="start-recipe-btn"
        onClick={ handleClick }
      >
        {inProgress ? 'Continue Recipe' : 'Start Recipe'}
      </StartRecipeButton>
      {inProgressFoodRecipeLoad && <Redirect to={ `/foods/${id}/in-progress` } />}
      {inProgressDrinkRecipeLoad && <Redirect to={ `/drinks/${id}/in-progress` } />}
    </>
  );
}

RecipeButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  linkCopied: PropTypes.string.isRequired,
};

export default RecipeButton;
