import React, { useContext, useEffect } from 'react';
// import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function FoodDetails() {
  const { foods, setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Foods Details');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <Header />
      <span>{foods[0].strMeal}</span>
      <Footer />
    </div>
  );
}

export default FoodDetails;
