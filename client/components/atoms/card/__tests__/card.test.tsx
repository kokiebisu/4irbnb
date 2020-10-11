import React from 'react';
import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../card.component';
import { landing } from '../card.stories';
import { categories } from '../../../../content/index';

describe('Base Button', () => {
  it('renders title correctly for host button', () => {
    const { getByTestId } = render(
      <Card {...landing.args} card={categories[0].card} />
    );
    // expect(getByTestId('card')).toHaveTextContent(
    //   'Unique staysSpaces that are more than just a place to sleep.'
    // );
    const { getByText } = within(getByTestId('card'));
    expect(getByText('Unique stays')).toBeInTheDocument();
  });
  it('renders description correctly for host button', () => {
    const { getByTestId } = render(
      <Card {...landing.args} card={categories[0].card} />
    );
    // expect(getByTestId('card')).toHaveTextContent(
    //   'Unique staysSpaces that are more than just a place to sleep.'
    // );
    const { getByText } = within(getByTestId('card'));
    expect(
      getByText('Spaces that are more than just a place to sleep.')
    ).toBeInTheDocument();
  });
});
