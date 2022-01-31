import React, { useContext, useEffect, useState } from 'react';
import { CategoriesButton, FoodCard } from '../../components';
import { CategoryContainer, FoodsContainer, MainContainer } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';
import { requestCategory, requestFoods } from '../../services';

function Foods() {
  /* const { categories, foods } = useContext(FoodsContext);
  console.log(categories); */
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [categories, setCategories] = useState();
  const [foods, setFoods] = useState();
  const maxCategories = 6;
  const maxFoods = 12;

  const handleCategory = async () => {
    const response = await requestCategory();
    setCategories(response.categories);
  };

  const handleFoods = async () => {
    const response = await requestFoods();
    setFoods(response.meals);
  };

  useEffect(() => {
    handleCategory();
    handleFoods();
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

      <FoodsContainer>
        {
          foods
          && foods.map((food, index) => (
            index < maxFoods && (
              <FoodCard key={ index } foods={ food } />
            )
          ))
        }
      </FoodsContainer>
      <Footer />
    </MainContainer>
  );
}

export default Foods;
