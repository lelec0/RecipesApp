import React from 'react';
import profileIcon from '../../assets/images/profileIcon.svg';

function Header() {
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
        titulo
      </div>
      <button
        type="button"
        data-testid="search-top-btn"
      >
        botao
      </button>
    </div>
  );
}

export default Header;
