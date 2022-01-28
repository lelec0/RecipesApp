import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';
// import { useHistory } from 'react-router-dom';

export const LoginContext = createContext();

function RecipesProvider({ children }) {
  // const history = useHistory();
  // https://v5.reactrouter.com/web/api/Hooks/usehistory
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const validateTest = () => {
    const minLength = 6;
    const verifyEmail = /\S+@\S+\.\S+/;
    if (password.length >= minLength && verifyEmail.test(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const loginHandleChange = ({ target: { type, value } }) => {
    validateTest();
    return type === 'email' ? setEmail(value) : setPassword(value);
    // if (type === 'email') {
    //   setEmail(value);
    //   ValidateTest();
    // } else {
    //   setPassword(value);
    //   ValidateTest();
    // }
  };

  const submit = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    setLoading(true);
    // history.push('/food');
  };

  const emailInput = {
    test: 'email-input',
    name: 'email',
    type: 'email',
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
    handleClick: submit,
    loading,
    page: '/foods',
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
