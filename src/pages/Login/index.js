import React, { useContext } from 'react';
import { Input, Button } from '../../components';
import { LoginContainer, Logo, FormContainer } from './style';
import logo from '../../assets/images/logo.png';
import { LoginContext } from '../../context/LoginProvider';

function Login() {
  const { emailInput, passwordInput, buttonParams } = useContext(LoginContext);

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
