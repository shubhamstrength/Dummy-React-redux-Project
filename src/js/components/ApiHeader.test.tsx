import { render, screen } from '@testing-library/react';
import ApiHeader from './ApiHeader';
import { MemoryRouter as Router } from 'react-router-dom';

test('renders head navigation', () => {
  render(<Router><ApiHeader/></Router>);
  const linkElementHaeding = screen.getByText(/Applike Frontend Test/i);
  expect(linkElementHaeding).toBeInTheDocument();

  const linkOneElement = screen.getByText(/Overview/i);
  expect(linkOneElement).toBeInTheDocument();

  const linkTwoElement = screen.getByText(/Campaigns/i);
  expect(linkTwoElement).toBeInTheDocument();

  const linkThreeElement = screen.getByText(/Create/i);
  expect(linkThreeElement).toBeInTheDocument();
});