import React from 'react';
import FoodsProvider from './context/FoodsProvider';
import HeaderProvider from './context/HeaderProvider';
import RecipesProvider from './context/RecipesProvider';
import Routes from './routes';

function App() {
  return (
    <FoodsProvider>
      <HeaderProvider>
        <RecipesProvider>
          <Routes />
        </RecipesProvider>
      </HeaderProvider>
    </FoodsProvider>
  );
}

export default App;
