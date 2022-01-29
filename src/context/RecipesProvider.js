import React from 'react';
import PropTypes from 'prop-types';
import LoginProvider from './LoginProvider';
import HeaderProvider from './HeaderProvider';
import FoodsProvider from './FoodsProvider';
// https://stackoverflow.com/questions/48363998/two-providers-in-a-react-component

function RecipesProvider({ children }) {
  return (
    <HeaderProvider>
      <FoodsProvider>
        <LoginProvider>
          { children }
        </LoginProvider>
      </FoodsProvider>
    </HeaderProvider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
