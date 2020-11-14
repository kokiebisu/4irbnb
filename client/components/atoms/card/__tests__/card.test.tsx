import React from 'react';
import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../card.component';
import { category } from '../card.stories';
import { categories } from '../../../../content/index';

describe('Base Button', () => {
  it('renders title correctly for host button', () => {
    const { getByTestId } = render(
      <Card {...category.args} title={categories[0].title} />
    );

    const { getByText } = within(getByTestId('card'));
    expect(getByText('Host your home')).toBeInTheDocument();
  });
});
