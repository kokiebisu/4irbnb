import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchBar } from 'molecules/SearchBar';
import { small } from 'molecules/SearchBar/stories/searchbar.stories';

describe('Small Searchbar', () => {
  it('renders text correctly', () => {
    const data = {
      type: 'sm',
      onPress: () => console.log('clicked'),
    };
    const { getByText } = render(<SearchBar {...data} />);
    expect(getByText('Start your search')).toBeInTheDocument();
  });
});
