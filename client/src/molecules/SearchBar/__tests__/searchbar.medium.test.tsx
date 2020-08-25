import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchBar } from 'molecules/SearchBar';
import { medium } from 'molecules/SearchBar/stories/searchbar.stories';

describe('Medium Searchbar', () => {
  it('renders text correctly', () => {
    const data = {
      type: 'md',
      onPress: () => console.log('clicked'),
    };
    const { getByText } = render(<SearchBar {...data} {...medium.args} />);
    expect(getByText('Where are you going?')).toBeInTheDocument();
  });
});
