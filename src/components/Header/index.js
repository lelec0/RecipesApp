import React, { useContext } from 'react';
import profileIcon from '../../assets/images/profileIcon.svg';
import { HeaderContext } from '../../context/HeaderProvider';

function Header() {
  const { title, searchIcon } = useContext(HeaderContext);
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
        searchIcon && (
          <button
            type="button"
            data-testid="search-top-btn"
          >
            { searchIcon }
          </button>)
      }
    </div>
  );
}

export default Header;
