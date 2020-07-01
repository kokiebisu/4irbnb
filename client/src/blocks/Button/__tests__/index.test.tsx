import React from 'react';
import Button from '../index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Button Block', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Button>
          <Button.Text>Login</Button.Text>
          <Button.Icon name='home' />
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
