import React, { useContext, useEffect } from 'react';
import RecipesContext from '../../context/RecipesContext';

function FoodDetails() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Foods Details');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <span>oi</span>
      {/* <span>{foods[0].strMeal}</span> */}
    </div>
  );
}

export default FoodDetails;
