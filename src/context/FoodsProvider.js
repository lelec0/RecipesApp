/* import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { requestCategory, requestFoods } from '../services';

export const FoodsContext = createContext();

function FoodsProvider({ children }) {
  /* const [categories, setCategories] = useState();
  const [foods, setFoods] = useState();

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
  }, []); */

/*  const foodsObj = {
    categories,
    foods,
  };

  return (
    <FoodsContext.Provider value={ foodsObj } displayName="Context Display Name">
      { children }
    </FoodsContext.Provider>
  );
}

FoodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodsProvider;
  */
