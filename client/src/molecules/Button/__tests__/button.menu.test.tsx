import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// atoms
import { CustomButton } from 'molecules/Button';

describe('Menu Button', () => {
  it('renders correctly', () => {
    const testingData = {
      action: () => console.log('test'),
    };

    const tree = renderer
      .create(
        <CustomButton
          type='menu'
          onPress={testingData.action}
          {...testingData}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
