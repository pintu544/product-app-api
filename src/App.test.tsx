// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  render(<App />);
  const inputElement = screen.getByRole('textbox', { name: /product name/i });
  const addButtonElement = screen.getByRole('button', { name: /add product/i });
  expect(inputElement).toBeInTheDocument();
  expect(addButtonElement).toBeInTheDocument();
});
