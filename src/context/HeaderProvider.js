/* import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';

export const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [title, setTitle] = useState('');
  const [btnSearchIcon, setBtnSearchIcon] = useState(false);
  const [search, setSearch] = useState('');
  const [radio, setRadio] = useState('');

  const handleChange = ({ target: { type, value } }) => (
    type === 'text' ? setSearch(value) : setRadio(value)
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

  const obj = {
    title,
    setTitle,
    radio,
    btnSearchIcon,
    setBtnSearchIcon,
    objInputCheckB1,
    objInputCheckB2,
    objInputCheckB3,
    objInputText,
  };

  return (
    <HeaderContext.Provider value={ obj } displayName="Context Display Name">
      { children }
    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderProvider;
 */
