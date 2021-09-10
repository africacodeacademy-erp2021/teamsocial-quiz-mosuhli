import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

describe('App Components Tests', () =>{
  it('Should render App Component', async() => {
    render(<App/>);

    const lableText = screen.getByText(/Log in to ACA Team Social App/i);
    expect(lableText).toBeInTheDocument();
    //userEvent.click(screen.getByRole(/Register/i));
    const lableLogin = screen.getByText(/Already have account?/i);
    expect(lableLogin).toBeInTheDocument();
    //userEvent.click(screen.getByRole(/Login/i))

    
  });

})