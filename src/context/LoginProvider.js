import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const loginHandleChange = ({ target: { type, value } }) => {
    // name === 'email' ? setEmail(value) : setPassword(value)
    if (type === 'email') {
      setEmail(value);
      ValidateTest();
    } else {
      setPassword(value);
      ValidateTest();
    }
  };

  ValidateTest = () => {
    const minLength = 6;
    const re = /\S+@\S+\.\S+/;
    if (password.length >= minLength && re.test(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const submit = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    // history.push('/');
  };

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
    disabled,
    submit,
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
