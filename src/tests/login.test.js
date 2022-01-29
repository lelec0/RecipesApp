import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';
import Login from '../pages/Login/index';
import renderWithRouter from '../helpers/renderWithRouter';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const BUTTON_LOGIN = 'login-submit-btn';

describe('Login Page Tests', () => {
  const emailInput = screen.queryByTestId(EMAIL_INPUT);
  const passwordInput = screen.queryByTestId(PASSWORD_INPUT);
  const btnLogin = screen.queryByTestId(BUTTON_LOGIN);

  it('tests if the icon appears on the screen', () => {
    render(<App />);
  });

  it('tests if the elements are present on the screen', () => {
    renderWithRouter(<Login />);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
  });

  it('tests if the button is disabled if there is a invalid email', () => {
    renderWithRouter(<Login />);
    userEvent.type(emailInput, 'potato.com');
    expect(btnLogin).toBeDisabled();
  });

  it('test if the email and password validation is correct', () => { // testar se os email e senha tao rolando
    render(<App />);
  });

  it('test if the route is correct when the button is clicked', () => { // testar se o vai pro caminho '/'
    render(<App />);
  });
});

describe('', () => {

});
