import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// atoms
import { BaseButton } from 'atoms/Button';

describe('Base Button', () => {
  it('renders correctly', () => {
    const testingData = {
      children: 'test',
      action: () => console.log('test'),
    };

    const tree = renderer
      .create(<BaseButton sm onPress={testingData.action} {...testingData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
