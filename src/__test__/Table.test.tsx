import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from '../components/Table';

// Sample book data for testing
const book = {
  title: 'Sample Book',
  author_name: ['John Doe'],
  publish_year: [2021],
  language: ['English'],
  edition_count: 1,
  publisher: 'Sample Publisher',
  publish_place: 'Sample Place',
};

test('renders Table component with book information', () => {
  render(<Table book={book} />);

  // Check if the book information is displayed correctly
  expect(screen.getByText('Book Information')).toBeInTheDocument();
  expect(screen.getByText('Sample Book')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('2021')).toBeInTheDocument();
  expect(screen.getByText('English')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('Sample Publisher')).toBeInTheDocument();
  expect(screen.getByText('Sample Place')).toBeInTheDocument();
});

