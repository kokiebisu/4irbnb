import React from 'react';
import Card from '../card';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// img
import img from '../../../assets/img/card.jpg';

describe('Base Card', () => {
  it('renders correctly with title', () => {
    const testingData = {
      image: img,
      tite: 'test title',
      description: 'test description',
    };

    const tree = renderer.create(<Card {...testingData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without title', () => {
    const testingData = {
      image: img,
      description: 'test description',
    };

    const tree = renderer.create(<Card {...testingData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
