import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchBar } from 'molecules/SearchBar';
import { searchBarMedium } from 'molecules/styles/searchbar.medium';

describe('Medium Searchbar', () => {
  it('renders text correctly', () => {
    const data = {
      type: 'md',
      onPress: () => console.log('clicked'),
    };
    const { getByText } = render(<SearchBar {...data} />);
    expect(getByText('Where are you going?')).toBeInTheDocument();
  });
});
