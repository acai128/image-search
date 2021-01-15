import React from 'react'; 
import { render, fireEvent } from '@testing-library/react'; 
import  SearchForm  from './SearchForm'; 

it('renders correctly', () => {
    const { queryByTestId, queryByPlaceholderName } = render(<SearchForm />);

    expect(queryByTestId("search-button")).toBeTruthy()
})

test('render', () => {
    render(<SearchForm />);
  });

test('queries existence', () => {
    const { getByText } = render(<SearchForm />);
    const search = getByText('Search');
  });

test('fireEvent', () => {
    const { getByText } = render(<SearchForm />);
    const search= getByText('Search');
    fireEvent.click(search);
  });