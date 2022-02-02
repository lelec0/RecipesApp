import React, { useContext, useEffect } from 'react';
// import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function DrinksDetails() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Drinks Details');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <Header />
      <span>oi start</span>
      <Footer />
    </div>
  );
}

export default DrinksDetails;
