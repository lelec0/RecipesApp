import React, { useContext, useEffect } from 'react';
// import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';

function DrinksDetails() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Drinks Details');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <span>oi start</span>
    </div>
  );
}

export default DrinksDetails;
