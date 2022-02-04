import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { ExploreDrinksContainer, ExploreDrinksTitle } from './style';

function ExploreDrinks() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Explore Drinks');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <ExploreDrinksContainer>
      <Header />
      <ExploreDrinksTitle>
        Explore Drinks Title
      </ExploreDrinksTitle>
      <Footer />
    </ExploreDrinksContainer>
  );
}

export default ExploreDrinks;
