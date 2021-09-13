import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import FormSignup from './register/FormSignup';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
export interface Props {
  shouldRemember: boolean;
  onUsernameChange: (username: string) => void;
  onPasswordChange: (password: string) => void;
  onRememberChange: (remember: boolean) => void;
  onSubmit: (username: string, password: string) => void;
}

describe('App Components Tests', () =>{
  it('Should display a blank login form', async() => {
    render(<FormSignup submitForm/>);

    const lableText = screen.getByText(/Log in to ACA Team Social App/i);
    expect(lableText).toBeInTheDocument();

    const username = await screen.findByPlaceholderText("Enter your username")
    expect(username).toBeInTheDocument();

    const pin = await screen.findByPlaceholderText("Enter your game pin")
    expect(pin).toBeInTheDocument();

    const btnLogin = await screen.findByText("Sign up")
    expect(btnLogin).toBeInTheDocument();
    
  });

})