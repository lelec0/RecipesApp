import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { foodIngredientFetch, foodNameFetch, foodFirstLetterFetch, drinkNameFetch,
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

  const submitApi = async () => {
    console.log(radio);
    if (radio === 'Ingredients') {
      const response = await foodIngredientFetch(search);
      setFoods(response.meals);
    } else if (radio === 'FirstLetter') {
      const response = await foodFirstLetterFetch(search);
      setFoods(response.meals);
    } else if (radio === 'Name') {
      const response = await foodNameFetch(search);
      setFoods(response.meals);
    } else if (!radio) {
      const response = await foodNameFetch('');
      setFoods(response.meals);
    }
  };

  const FoodAPI = async () => {
    const response = await foodNameFetch('');
    setFoods(response.meals);
  };

  const DrinkAPI = async () => {
    const response = await drinkNameFetch('');
    setFoods(response.drinks);
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
