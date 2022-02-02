import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CategoriesButton, DrinkCard } from '../../components';
import { CategoryContainer, DrinksContainer, MainContainer } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';
import { requestCategoriesDrinks } from '../../services';

function Drinks() {
  const history = useHistory();
  const { drinks, setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [categories, setCategories] = useState();

  const maxCategories = 6;
  const maxDrinks = 12;

  const handleCategory = async () => {
    const response = await requestCategoriesDrinks();
    setCategories(response);
  };

  useEffect(() => {
    handleCategory();
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
        {/* { console.log(drinks) } */}
        {
          (drinks.length === 1)
          && history.push('/explore/foods')
        }
        {
          (drinks.length !== 1)
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
