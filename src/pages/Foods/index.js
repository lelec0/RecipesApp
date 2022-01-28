import React, { useContext } from 'react';
import { Button, FoodCard } from '../../components';
import { FoodsContext } from '../../context/FoodsProvider';
import { CategoryContainer, FoodsContainer, MainContainer } from './style';

function Foods() {
  const { categories, foods } = useContext(FoodsContext);
  console.log(foods);

  const maxCategories = 6;
  const maxFoods = 12;

  return (
    <MainContainer>
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
