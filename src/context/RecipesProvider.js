import React from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
// https://stackoverflow.com/questions/48363998/two-providers-in-a-react-component

function RecipesProvider({ children }) {
  const values = {

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
