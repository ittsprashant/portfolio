import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero with name and contact call to action', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Prashant Awasthi/);
  expect(screen.getByText(/Let's build something/i)).toBeInTheDocument();
});
