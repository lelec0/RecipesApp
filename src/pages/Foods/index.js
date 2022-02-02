import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CategoriesButton, FoodCard } from '../../components';
import { CategoryContainer, FoodsContainer, MainContainer } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';
import { requestCategory } from '../../services';

function Foods() {
  const { foods,
    setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [categories, setCategories] = useState();
  const history = useHistory();

  const maxCategories = 6;
  const maxFoods = 12;

  const handleCategory = async () => {
    const response = await requestCategory();
    setCategories(response.categories);
  };

  useEffect(() => {
    handleCategory();
  }, []);

  useEffect(() => {
    setTitle('Foods');
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
      {console.log(foods) }
      <FoodsContainer>
        {
          (foods.length === 1)
          && history.push(`/foods:${foods[0].idMeal}`)
          // fazer card aqui que contem, a receita da comida escolhida, se tiver mais de 1 receita apresentar todas as receitas em card
        }
        {
          foods
          && foods.map((food, index) => (
            index < maxFoods && (
              <FoodCard
                key={ index }
                foods={ food }
                data-testid={ `${index}-recipe-card` }
              />
            )
          ))
        }
      </FoodsContainer>
      <Footer />
    </MainContainer>
  );
}

export default Foods;
