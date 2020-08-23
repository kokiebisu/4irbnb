import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { SearchBar } from 'molecules/SearchBar';

describe('Searchbar', () => {
  it('renders correctly with small size', () => {
    const testingData = {
      type: 'sm',
      onPress: () => console.log('it is working'),
    };

    const tree = renderer.create(<SearchBar {...testingData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with medium size', () => {
    const testingData = {
      type: 'md',
      onPress: () => console.log('it is working'),
    };

    const tree = renderer.create(<SearchBar {...testingData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with large size', () => {
    const testingData = {
      type: 'lg',
      onPress: () => console.log('it is working'),
    };

    const tree = renderer.create(<SearchBar {...testingData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
