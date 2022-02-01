import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { foodIngredientFetch, foodNameFetch, foodFirstLetterFetch,
} from '../services';
// https://stackoverflow.com/questions/48363998/two-providers-in-a-react-component

function RecipesProvider({ children }) {
  const [title, setTitle] = useState('');
  const [btnSearchIcon, setBtnSearchIcon] = useState(false);
  const [radio, setRadio] = useState('');
  const [submit, setSubmit] = useState(false);
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([]);

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
    const responsee = await foodNameFetch('');
    setFoods(responsee.meals);
  };

  useEffect(() => {
    FoodAPI();
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
