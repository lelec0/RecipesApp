import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { HeaderContext } from '../../context/HeaderProvider';

function ExploreFoodsIngredients() {
  const { setTitle, setBtnSearchIcon } = useContext(HeaderContext);
  useEffect(() => {
    setTitle('Explore Ingredients');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      ExploreFoodsIngredients
      <Header />
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;
