import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '..';
import profileIcon from '../../assets/images/profileIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import { HeaderContext } from '../../context/HeaderProvider';
import { HeaderButton, HeaderContainer, HeaderTitle } from './style';

function Header() {
  const { title, btnSearchIcon, objInputText,
    objInputCheckB1, objInputCheckB2, objInputCheckB3 } = useContext(HeaderContext);
  // const actSerch = true;
  // console.log(objInputText);
  // const showSearch
  const [showSearch, setShowSearch] = useState(false);

  return (
    <HeaderContainer>
      <Link to="/profile">
        <HeaderButton type="button">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile Icon" />
        </HeaderButton>
      </Link>

      <HeaderTitle
        data-testid="page-title"
      >
        { title }
      </HeaderTitle>
      {
        btnSearchIcon && (
          <HeaderButton
            type="button"
            onClick={ () => (
              showSearch === true ? setShowSearch(false) : setShowSearch(true)
            ) }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Explore Icon"
            />
          </HeaderButton>
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
    </HeaderContainer>
  );
}

export default Header;
