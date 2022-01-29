import React, { useContext, useEffect } from 'react';
import { CategoriesButton, FoodCard } from '../../components';
import { FoodsContext } from '../../context/FoodsProvider';
import { CategoryContainer, FoodsContainer, MainContainer } from './style';
import { HeaderContext } from '../../context/HeaderProvider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Foods() {
  const { categories, foods } = useContext(FoodsContext);
  console.log(categories);
  const { setTitle, setBtnSearchIcon } = useContext(HeaderContext);
  const maxCategories = 6;
  const maxFoods = 12;

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
