import React from 'react';
import PropTypes from 'prop-types';
import LoginProvider from './LoginProvider';
// https://stackoverflow.com/questions/48363998/two-providers-in-a-react-component

function RecipesProvider({ children }) {
  return (
    <LoginProvider>
      { children }
    </LoginProvider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
