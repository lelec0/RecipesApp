import React from 'react';
import FoodsProvider from './context/FoodsProvider';
import RecipesProvider from './context/RecipesProvider';
import Routes from './routes';

function App() {
  return (
    <RecipesProvider>
      <FoodsProvider>
        <Routes />
      </FoodsProvider>
    </RecipesProvider>
  );
}

export default App;
