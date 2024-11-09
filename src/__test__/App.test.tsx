import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Mock the Home component
jest.mock('../components/Home', () => () => <div>Home Page</div>);

test('renders Home component', () => {
  render(<App />);
  // Check if the Mocked Home component is in the document
  expect(screen.getByText('Home Page')).toBeInTheDocument();
});
