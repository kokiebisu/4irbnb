import React from 'react';
import { BaseButton } from '../button';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Base Button', () => {
  it('renders correctly', () => {
    const testingData = {
      children: 'test',
      action: () => console.log('test'),
    };

    const tree = renderer
      .create(
        <BaseButton size={3} onPress={testingData.action} {...testingData} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
