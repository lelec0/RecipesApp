import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';

export const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [title, setTitle] = useState('');
  const [btnSearchIcon, setBtnSearchIcon] = useState(false);

  const obj = {
    title,
    setTitle,
    btnSearchIcon,
    setBtnSearchIcon,
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
