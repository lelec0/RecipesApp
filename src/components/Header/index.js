import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { Input } from '../../components';
import Input from '../Input';
import profileIcon from '../../assets/images/profileIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import RecipesContext from '../../context/RecipesContext';
import {
  HeaderButton, HeaderContainer, HeaderImage, HeaderTitle,
  SearchBarContainer, SearchBarButton,
} from './style';

function Header() {
  const { setSearch, title, setRadio,
    submitApi, btnSearchIcon } = useContext(RecipesContext);
  const [showSearch, setShowSearch] = useState(false);

  const handleChange = ({ target: { type, value } }) => (
    type === 'text' ? setSearch(value) : setRadio(value)
  );

  const objInputText = {
    test: 'search-input',
    name: 'SearchInput',
    type: 'text',
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
    value: 'FirstLetter',
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
          <SearchBarContainer>
            <Input inputValues={ objInputText } />
            <Input inputValues={ objInputCheckB1 } />
            Ingredients
            <Input inputValues={ objInputCheckB2 } />
            Name
            <Input inputValues={ objInputCheckB3 } />
            First Letter

            <SearchBarButton
              type="button"
              data-testid="exec-search-btn"
              onClick={ submitApi }
            >
              Search
            </SearchBarButton>
          </SearchBarContainer>
        )
      }
    </HeaderContainer>
  );
}

export default Header;
