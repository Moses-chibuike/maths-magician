import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

test('Header renders accurately', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  const Element = screen.getByText('Math Magicians');
  expect(Element).toBeInTheDocument();
});
