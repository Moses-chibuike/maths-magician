import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../components/pages/quote';

it('Quote renders correctly', () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});

it('Quote user interaction', () => {
  render(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  );
  const Element = screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston');
  expect(Element).toBeInTheDocument();
});
