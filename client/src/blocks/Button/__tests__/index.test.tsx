import React from 'react';
import { Button } from '../button';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Button Block', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button onPress={() => console.log('base')}>button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
