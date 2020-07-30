import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// atoms
import Card from 'molecules/Card/card';

// img
import card1 from 'assets/img/card1.jpg';

describe('Base Card', () => {
  it('renders correctly with title', () => {
    const testingData = {
      image: card1,
      tite: 'test title',
      description: 'test description',
    };

    const tree = renderer.create(<Card {...testingData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without title', () => {
    const testingData = {
      image: card1,
      description: 'test description',
    };

    const tree = renderer.create(<Card {...testingData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
