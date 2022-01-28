import React, { useContext } from 'react';
import { Input } from '../../components';
import { LoginContainer, Logo, FormContainer } from './style';
import logo from '../../assets/images/logo.png';
import { LoginContext } from '../../context/LoginProvider';
import LoginButton from '../../components/LoginButton';

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
        <LoginButton>
          { buttonParams }
        </LoginButton>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;
