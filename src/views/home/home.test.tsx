import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders title home page', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Home page/i);
  expect(linkElement).toBeInTheDocument();
});
