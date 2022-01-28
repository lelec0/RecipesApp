import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandleChange = ({ target: { name, value } }) => (
    name === 'email' ? setEmail(value) : setPassword(value)
  );

  const emailInput = {
    test: 'email-input',
    name: 'email',
    type: 'text',
    value: email,
    placeholder: 'Email',
    loginHandleChange,
  };

  const passwordInput = {
    test: 'password-input',
    name: 'password',
    type: 'password',
    value: password,
    placeholder: 'Password',
    loginHandleChange,
  };

  const buttonParams = {
    test: 'login-submit-btn',
    name: 'Login',
  };

  const obj = {
    emailInput,
    passwordInput,
    buttonParams,
    loginHandleChange,
  };

  return (
    <LoginContext.Provider value={ obj } displayName="Context Display Name">
      { children }
    </LoginContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
