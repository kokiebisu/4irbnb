import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// atoms
import { CustomButton } from 'molecules/Button';

describe('Cookie Button', () => {
  it('renders correctly', () => {
    const testingData = {
      children: 'test',
      action: () => console.log('test'),
    };

    const tree = renderer
      .create(
        <CustomButton
          type='cookie'
          onPress={testingData.action}
          {...testingData}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
