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

  // Ingredient => https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}
  // Name => https://www.themealdb.com/api/json/v1/1/search.php?s={nome}
  const ingredientFetch = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
    const data = await response.json();
    return data;
  };

  // First Letter => https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}
  const firstLetterFetch = async () => {
    if (search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search[0]}`);
      const data = await response.json();
      return data;
    }
  };

  const handleChange = ({ target: { /* type */ value } }) => {
    // type === 'text' ?
    console.log(search);
    return setSearch(value);
    // : setRadio(value)
  };

  const objInputText = {
    // test: 'exec-search-btn',
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

  const handleFilter = () => {
    if (search === 'Ingredients' || search === 'Name') {
      ingredientFetch();
    } else if (search === 'FirstLetter') {
      console.log('else');
      firstLetterFetch();
    }
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
          <div>
            <Input inputValues={ objInputText } />
            <Input inputValues={ objInputCheckB1 } />
            Ingredients
            <Input inputValues={ objInputCheckB2 } />
            Name
            <Input inputValues={ objInputCheckB3 } />
            First Letter

            <button
              type="button"
              data-testid="exec-search-btn"
              onClick={ () => handleFilter }
            >
              Search
            </button>
          </div>
        )
      }
    </HeaderContainer>
  );
}

export default Header;
