import React from 'react';
import { Input, Button } from '../../components';
import { LoginContainer, Logo, FormContainer } from './style';
import logo from '../../assets/images/logo.png';

function Login() {
  const emailInput = {
    test: 'email-input',
    name: 'Email',
    type: 'text',
    handleChange: () => {},
  };

  const passwordInput = {
    test: 'password-input',
    name: 'Password',
    type: 'password',
    handleChange: () => {},
  };

  const buttonParams = {
    test: 'login-submit-btn',
    name: 'Login',
  };

  return (
    <LoginContainer>
      <Logo
        src={ logo }
      />
      <FormContainer>
        <Input inputValues={ emailInput } />
        <Input inputValues={ passwordInput } />
        <Button>
          { buttonParams }
        </Button>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;
