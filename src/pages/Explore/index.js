import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';

function Explore() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <div>
      <Header />
      <Link to="/explore/foods">
        <button
          id="btn"
          type="button"
          data-testid="explore-food"
        >
          Explore Foods
        </button>
      </Link>
      <Link to="/explore/drinks">
        <button
          id="btn"
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Explore;
