import React from 'react';
import Card from '../card';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Base Card', () => {
  it('renders correctly', () => {
    const testingData = {
      text: 'test',
    };

    const tree = renderer.create(<Card {...testingData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
