import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

const mockFetchData = (data: object) => {
  (global.fetch as jest.Mock).mockImplementationOnce(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          json: async () => data,
        });
      }, 100); // 100ms delay to simulate fetch
    });
  });
};

test('renders Home component', async () => {
  await act(async () => {
    mockFetchData({ docs: [] });
    render(<Home />);
  });
  expect(screen.getByText(/Book Finder/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/search book/i)).toBeInTheDocument();
});

test('displays loading message during fetch', async () => {
  await act(async () => {
    mockFetchData({ docs: [] });
    render(<Home />);
  });

  await act(async () => {
    fireEvent.change(screen.getByPlaceholderText(/search book/i), {
      target: { value: 'Test' },
    });
  });

  // Check for loading message
  await waitFor(() =>
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
  );

  // Wait for the loading message to disappear
  await waitFor(() =>
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument()
  );
});

test('displays error message if no results found', async () => {
  await act(async () => {
    mockFetchData({ docs: [] });
    render(<Home />);
  });

  await act(async () => {
    fireEvent.change(screen.getByPlaceholderText(/search book/i), {
      target: { value: 'Test' },
    });
  });

  // Wait for the "No results found" message to appear
  await waitFor(() =>
    expect(screen.getByText(/No results found/i)).toBeInTheDocument()
  );
});
