import React, { useContext, useEffect } from 'react';
import { Header } from '../../components';
import DoneCard from '../../components/DoneCard';
import RecipesContext from '../../context/RecipesContext';
import { DoneRecipesContainer, DoneRecipesTitle } from './style';

function DoneRecipes() {
  const [filterRecipe, setFilteRecipe] = useState('All');
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Done Recipes');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  // aqui vai a logica de guardar no local storage, caso o local storage for vazio ou null
  const verify = () => {
    let filtered = [];
    if (localStorage.getItem('doneRecipes') !== null) {
      const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));
      if (filterRecipe !== 'All') {
        filtered = recipesDone.filter((elem) => elem.type === filterRecipe);
      } else {
        filtered = recipesDone;
      }
      return (
        filtered.map((elem, index) => (
          <DoneCard key={ index } objDetail={ elem } index={ index } />
        ))
      );
    }
  };

  const handleClick = (type) => {
    setFilteRecipe(type);
  };

  return (
    <DoneRecipesContainer>
      <Header />
      <DoneRecipesTitle>
        <div className="done-recipes-body">
          <div>
            <button
              type="button"
              data-testid="filter-by-all-btn"
              onClick={ () => handleClick('All') }
            >
              All
            </button>
            <button
              type="button"
              data-testid="filter-by-food-btn"
              onClick={ () => handleClick('foods') }

            >
              Foods
            </button>
            <button
              type="button"
              data-testid="filter-by-drink-btn"
              onClick={ () => handleClick('drinks') }
            >
              Drinks
            </button>
          </div>
          { verify() }
        </div>
      </DoneRecipesTitle>
    </DoneRecipesContainer>
  );
}

export default DoneRecipes;
