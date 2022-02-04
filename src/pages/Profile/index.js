import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';

function Profile() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Profile');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  const getEmail = () => {
    if (localStorage.getItem('user') !== null) {
      const { email } = JSON.parse(localStorage.getItem('user'));
      return email;
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
  };

  return (
    <div>
      <Header />
      <h3 data-testid="profile-email">{getEmail()}</h3>
      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ clearLocalStorage }
        >
          Logout
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Profile;
