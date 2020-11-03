import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Bullet } from '../bullet.component';
import { characteristic } from '../bullet.stories';

describe('Base Button', () => {
  it('renders correctly for host button', () => {
    const { getByTestId } = render(
      <Bullet {...characteristic.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Become a host');
  });
});
