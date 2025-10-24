import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Simple test to verify the app renders without crashing
test('renders Paradise Nursery app', () => {
  render(<App />);
  
  // Check if the header with company name is present
  expect(screen.getByText('🌿 Paradise Nursery')).toBeInTheDocument();
});