import React, { useContext } from 'react';
import profileIcon from '../../assets/images/profileIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import { HeaderContext } from '../../context/HeaderProvider';

function Header() {
  const { title, btnSearchIcon } = useContext(HeaderContext);
  return (
    <div>
      <img
        src={ profileIcon }
        alt="Profile Icon"
        data-testid="profile-top-btn"
      />

      <div
        data-testid="page-title"
      >
        { title }
      </div>
      {
        btnSearchIcon && (
          <button
            type="button"
            data-testid="search-top-btn"
          >
            <img
              src={ searchIcon }
              alt="Explore Icon"
              data-testid="search-input"
            />
          </button>)
      }
    </div>
  );
}

export default Header;
