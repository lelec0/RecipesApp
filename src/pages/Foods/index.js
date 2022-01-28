import React, { useContext, useEffect } from 'react';
import { Button, FoodCard } from '../../components';
import { FoodsContext } from '../../context/FoodsProvider';
import { CategoryContainer, FoodsContainer, MainContainer } from './style';
import Header from '../../components/Header';
import { HeaderContext } from '../../context/HeaderProvider';

function Foods() {
  const { categories, foods } = useContext(FoodsContext);
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
    </MainContainer>
  );
}

export default Foods;
