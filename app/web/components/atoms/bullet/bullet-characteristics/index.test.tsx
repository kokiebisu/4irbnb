import React from 'react';
import { Bullet } from '@bullet';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Characteristic Button', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Bullet variant="characteristic" onClick={() => console.log('clicked')} />
    );
    expect(getByTestId('characteristic-bullet--atom')).toBeInTheDocument();
  });
});
