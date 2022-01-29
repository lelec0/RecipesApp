import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import renderWithRouter from '../helpers/renderWithRouter';
import Foods from '../pages/Foods/index';
import searchIcon from '../assets/images/searchIcon.svg';
import profileIcon from '../assets/images/profileIcon.svg';

describe('1 - Foods Page Header', () => {
  it('verifies search icon, user icon and page title', () => {
    renderWithRouter(<Foods />);
    const magnifierIcon = screen.getByRole('img');
    const userIcon = screen.getByRole('img');
    const pageTitle = screen.getByText('Foods');
    const srcMagnifierIcon = magnifierIcon.getAttribute('src');
    const srcUserIcon = userIcon.getAttribute('src');
    expect(pageTitle).toBeInTheDocument();
    expect(userIcon).toBeInTheDocument();
    expect(magnifierIcon).toBeInTheDocument();
    expect(srcMagnifierIcon).toBe(searchIcon);
    expect(srcUserIcon).toBe(profileIcon);
  });

  it('', () => {

  });

  it('', () => {

  });

  it('', () => {

  });

  it('', () => {

  });

  it('', () => {

  });
});
