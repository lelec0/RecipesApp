import React from 'react';

function Header() {
  return (
    <div>
      <div
        data-testid="profile-top-btn"
      >
        perfil
      </div>
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
