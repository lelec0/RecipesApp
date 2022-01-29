import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '..';
import profileIcon from '../../assets/images/profileIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import { HeaderContext } from '../../context/HeaderProvider';

function Header() {
  const { title, btnSearchIcon, objInputText,
    objInputCheckB1, objInputCheckB2, objInputCheckB3 } = useContext(HeaderContext);
  // const actSerch = true;
  // console.log(objInputText);
  // const showSearch
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <Link to="/profile">
        <button type="button">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile Icon" />
        </button>
      </Link>

      <div
        data-testid="page-title"
      >
        { title }
      </div>
      {
        btnSearchIcon && (
          <button
            type="button"
            // data-testid="search-top-btn"
            onClick={ () => (
              showSearch === true ? setShowSearch(false) : setShowSearch(true)
            ) }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Explore Icon"
            />
          </button>
        )
      }

      {
        showSearch && (
          <div data-testid="search-input">
            <Input inputValues={ objInputText } />
            <Input inputValues={ objInputCheckB1 } />
            Ingredients
            <Input inputValues={ objInputCheckB2 } />
            Name
            <Input inputValues={ objInputCheckB3 } />
            Fisrt Letter
          </div>
        )
      }
    </div>
  );
}

export default Header;
