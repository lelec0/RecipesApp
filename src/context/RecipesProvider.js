import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { foodIngredients, foodNameFetch, foodFirstLetterFetch, drinkNameFetch,
  drinkIngredientFetch, drinkFirstLetterFetch,
} from '../services';
// https://stackoverflow.com/questions/48363998/two-providers-in-a-react-component

function RecipesProvider({ children }) {
  const [title, setTitle] = useState('');
  const [btnSearchIcon, setBtnSearchIcon] = useState(false);
  const [radio, setRadio] = useState('');
  const [submit, setSubmit] = useState(false);
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const setMealsApi = async () => {
    console.log(radio);
    if (radio === 'Ingredients') {
      const response = await foodIngredients(search);
      setFoods(response.meals);
    } else if (radio === 'FirstLetter') {
      const response = await foodFirstLetterFetch(search);
      setFoods(response);
    } else if (radio === 'Name') {
      // console.log('toCerto');
      const response = await foodNameFetch(search);
      setFoods(response.meals);
    } else if (!radio) {
      // console.log('toAQUI');
      const response = await foodNameFetch('');
      setFoods(response.meals);
    }
  };

  const setDrinksApi = async () => {
    if (radio === 'Ingredients') {
      const response = await drinkIngredientFetch(search);
      setDrinks(response.drinks);
    } else if (radio === 'FirstLetter') {
      const response = await drinkFirstLetterFetch(search);
      setDrinks(response);
    } else if (radio === 'Name') {
      const response = await drinkNameFetch(search);
      setDrinks(response.drinks);
    } else if (!radio) {
      const response = await drinkNameFetch('');
      setDrinks(response.drinks);
    }
  };

  const submitApi = async () => {
    if (title === 'Drinks') {
      setDrinksApi();
    } else if (title === 'Foods') {
      setMealsApi();
    }
  };

  const FoodAPI = async () => {
    const response = await foodNameFetch('');
    setFoods(response.meals);
    console.log(response);
  };

  const DrinkAPI = async () => {
    const response = await drinkNameFetch('');
    setDrinks(response.drinks);
  };

  useEffect(() => {
    FoodAPI();
    DrinkAPI();
  }, []);

  const values = {
    submitApi,
    title,
    setTitle,
    btnSearchIcon,
    setBtnSearchIcon,
    setRadio,
    radio,
    setSubmit,
    submit,
    setSearch,
    search,
    foods,
    setFoods,
    drinks,
    setDrinks,
  };

  return (
    <RecipesContext.Provider value={ values }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
