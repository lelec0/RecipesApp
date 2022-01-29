import React, { useContext, useEffect } from 'react';
import { CategoriesButton, FoodCard } from '../../components';
import { FoodsContext } from '../../context/FoodsProvider';
import { CategoryContainer, FoodsContainer, MainContainer } from './style';
import Header from '../../components/Header';
import { HeaderContext } from '../../context/HeaderProvider';

function Foods() {
  const { categories, foods } = useContext(FoodsContext);
  console.log(categories);
  const { setTitle, setBtnSearchIcon } = useContext(HeaderContext);
  useEffect(() => {
    setTitle('Foods');
    setBtnSearchIcon(true);
  }, [setTitle, setBtnSearchIcon]);

  const maxCategories = 6;
  const maxFoods = 12;

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
    </MainContainer>
  );
}

export default Foods;
