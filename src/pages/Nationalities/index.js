import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';

function Nationalities() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Nationalities');
    setBtnSearchIcon(true);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default Nationalities;
