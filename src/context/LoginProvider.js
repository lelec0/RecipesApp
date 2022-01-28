import PropTypes from 'prop-types';
import React, { useState } from 'react';
import LoginContext from './LoginContext';

function RecipesProvider({ children }) {
  const [state1, setState1] = useState('oie');

  const obj = {
    state1,
    setState1,
  };

  return (
    <LoginContext.Provider value={ obj } displayName="Context Display Name">
      { children }
    </LoginContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
