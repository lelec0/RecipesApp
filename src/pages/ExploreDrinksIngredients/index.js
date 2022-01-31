import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';

function ExploreDrinksIngredients() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Ingredients');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
