import React from 'react'; 
// import * as React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import  SearchForm  from './SearchForm'; 

it('renders correctly', () => {
    const { queryByTestId, queryByPlaceholderName } = render(<SearchForm />);

    expect(queryByTestId("search-button")).toBeTruthy()
})

// it('should be enabled', () => {
//     const { getByTestId } = render(<SearchForm />);
//     expect(getByTestId('search-button')).not.toHaveAttribute('disabled')
//   });

test('render', () => {
    render(<SearchForm />);
  });

test('queries existence', () => {
    const { getByText } = render(<SearchForm />);
    const search = getByText('Search');
  });