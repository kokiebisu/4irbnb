import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchBar } from 'molecules/SearchBar';
import { large } from 'molecules/SearchBar/stories/searchbar.stories';

describe('Large Searchbar', () => {
  it('renders text correctly', () => {
    const data = {
      type: 'lg',
    };
    const { getByText } = render(<SearchBar {...data} {...large.args} />);
    expect(getByText('Location')).toBeInTheDocument();
  });
});
