import React from 'react';
import { BaseButton } from '../button';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Base Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BaseButton onPress={() => console.log('base')}>button</BaseButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
