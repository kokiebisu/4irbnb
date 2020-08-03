import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// atoms
import { CustomButton } from 'molecules/Button';

describe('Search Button', () => {
  it('renders correctly', () => {
    const testingData = {
      action: () => console.log('test'),
    };

    const tree = renderer
      .create(
        <CustomButton
          type='search'
          onPress={testingData.action}
          {...testingData}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
