import React, { useContext, useEffect, useState } from 'react';
import { CategoriesButton, DrinkCard } from '../../components';
import { CategoryContainer, DrinksContainer, MainContainer } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';
import { requestDrinkCategory, requestDrinks } from '../../services';

// task: renomear DrinkCard

function Drinks() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [categories, setCategories] = useState();
  const [drinks, setDrinks] = useState();
  const maxCategories = 6;
  const maxDrinks = 12;

  const handleCategory = async () => {
    const response = await requestDrinkCategory();
    setCategories(response.drinks);
    // console.log(response);
  };

  const handleDrinks = async () => {
    const response = await requestDrinks();
    setDrinks(response.drinks);
  };

  useEffect(() => {
    handleCategory();
    handleDrinks();
  }, []);

  useEffect(() => {
    setTitle('Drinks');
    setBtnSearchIcon(true);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <MainContainer>
      <Header />
      <CategoryContainer>
        {
          categories
          && categories.map((category, index) => (
            index < maxCategories && (
              <CategoriesButton key={ index } category={ category } />
            )
          ))
        }
      </CategoryContainer>

      <DrinksContainer>
        {
          drinks
          && drinks.map((drink, index) => (
            index < maxDrinks && (
              <DrinkCard
                data-testid={ `${index}-recipe-card` }
                key={ index }
                drinks={ drink }
              />
            )
          ))
        }
      </DrinksContainer>
      <Footer />
    </MainContainer>
  );
}

export default Drinks;
