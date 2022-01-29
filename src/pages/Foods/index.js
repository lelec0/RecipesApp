import React, { useContext, useEffect } from 'react';
import { Button, FoodCard } from '../../components';
import { FoodsContext } from '../../context/FoodsProvider';
import { CategoryContainer, FoodsContainer, MainContainer } from './style';
import { HeaderContext } from '../../context/HeaderProvider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Foods() {
  const { categories, foods } = useContext(FoodsContext);
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
          && categories.map(({ strCategory }, index) => (
            index < maxCategories && <Button key={ index } category={ strCategory } />
          ))
        }
      </CategoryContainer>

      <FoodsContainer>
        {
          foods
          && foods.map((food, index) => (
            index < maxFoods && (
              <FoodCard foods={ food } />
            )
          ))
        }
      </FoodsContainer>
      <Footer />
    </MainContainer>
  );
}

export default Foods;
