import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '..';
import profileIcon from '../../assets/images/profileIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import RecipesContext from '../../context/RecipesContext';
import { HeaderButton, HeaderContainer, HeaderImage, HeaderTitle } from './style';

function Header() {
  const { title, btnSearchIcon } = useContext(RecipesContext);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  // const [radio, setRadio] = useState('');

  const handleChange = ({ target: { /* type */ value } }) => (
    // type === 'text' ?
    setSearch(value)
    // : setRadio(value)
  );

  const objInputText = {
    test: 'exec-search-btn',
    name: 'SearchInput',
    type: 'text',
    value: search,
    placeholder: 'Search Recipe',
    handleChange,
  };

  const objInputCheckB1 = {
    test: 'ingredient-search-radio',
    name: 'radioButton',
    type: 'radio',
    value: 'Ingredients',
    placeholder: 'Ingredients',
    handleChange,
  };

  const objInputCheckB2 = {
    test: 'name-search-radio',
    name: 'radioButton',
    type: 'radio',
    value: 'Name',
    placeholder: 'Name',
    handleChange,
  };

  const objInputCheckB3 = {
    test: 'first-letter-search-radio',
    name: 'radioButton',
    type: 'radio',
    value: 'FistLetter',
    placeholder: 'Fist Letter',
    handleChange,
  };

  return (
    <HeaderContainer>
      <Link to="/profile">
        <HeaderButton type="button">
          <HeaderImage
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Profile Icon"
          />
        </HeaderButton>
      </Link>

      <HeaderTitle
        data-testid="page-title"
      >
        { title }
      </HeaderTitle>
      {
        btnSearchIcon ? (
          <HeaderButton
            type="button"
            onClick={ () => (
              showSearch === true ? setShowSearch(false) : setShowSearch(true)
            ) }
          >
            <HeaderImage
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Explore Icon"
            />
          </HeaderButton>
        ) : (
          <HeaderButton>
            <HeaderImage
              src={ searchIcon }
              alt="Invisible Icon"
              style={ { display: 'none' } }
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
