import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { queryByLabelText } = render(<App />);
  const linkElement = queryByLabelText('Enter Info')
  expect(linkElement).toBeInTheDocument();
});
