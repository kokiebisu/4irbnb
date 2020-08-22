import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// atoms
import { CustomButton } from 'molecules/Button';
import { Medium } from 'atoms/stories/button.stories';

describe('Button', () => {
  it('renders correctly', () => {
    const testingData = {
      action: () => console.log('test'),
    };

    const tree = renderer
      .create(
        <CustomButton
          onPress={testingData.action}
          {...testingData}
          {...Medium.args}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
