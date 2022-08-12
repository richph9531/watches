import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FitBit heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/FitBit/i);
  expect(linkElement).toBeInTheDocument();
});
