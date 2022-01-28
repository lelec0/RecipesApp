import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';

export const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [title, setTitle] = useState('');
  const [searchIcon, setSearchIcon] = useState(false);

  const obj = {
    title,
    setTitle,
    searchIcon,
    setSearchIcon,
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
