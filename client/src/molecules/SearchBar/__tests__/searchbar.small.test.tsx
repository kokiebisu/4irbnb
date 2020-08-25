import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchBar } from 'molecules/SearchBar';
import { small } from 'molecules/SearchBar/stories/searchbar.stories';

describe('Small Searchbar', () => {
  it('renders correctly with small size', () => {
    const { getByText } = render(<SearchBar {...small.args} />);
  });
});
