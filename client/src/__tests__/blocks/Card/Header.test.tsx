import React from 'react';
import { shallow } from '../../../enzyme';
import renderer from 'react-test-renderer';
import { Header } from '../../../blocks/Card/Header';

describe('Basic Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header>header</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
