import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [state1, setState1] = useState('oie');

  const obj = {
    state1,
    setState1,
  };

  const handleChange = () => {
    
  };

  return (
    <RecipesContext value={ obj } displayName="Context Display Name">
      { children }
    </RecipesContext>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
