import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from 'atoms';

describe('Base Button', () => {
  it('renders correctly', () => {
    const testingData = {
      children: 'test',
      action: () => console.log('test'),
    };

    const tree = renderer
      .create(<Button sm onPress={testingData.action} {...testingData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
