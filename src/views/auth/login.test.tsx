import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders title login page', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/Login page/i);
  expect(linkElement).toBeInTheDocument();
});
