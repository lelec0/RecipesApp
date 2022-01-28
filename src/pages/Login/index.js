import React from 'react';
import { Input, Button } from '../../components';
import { LoginContainer, Logo, FormContainer } from './style';
import logo from '../../assets/images/logo.png';

function Login() {
  const emailInput = {
    test: 'cu',
    name: 'Email',
    type: 'text',
    handleChange: () => {},
  };

  const passwordInput = {
    test: 'cu',
    name: 'Password',
    type: 'password',
    handleChange: () => {},
  };

  const buttonParams = {
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
