import React from 'react';
import { Input, Button } from '../../components';
import { LoginContainer, Logo, FormContainer } from './style';
import logo from '../../assets/images/logo.png';

function Login() {
  const inputParams = {

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
        <Input />
        <Input />
        <Button>
          { buttonParams }
        </Button>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;
