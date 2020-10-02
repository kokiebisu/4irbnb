import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../button.component';
import { host, globe } from '../button.stories';

describe('Base Button', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Button {...host.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Become a host');
  }),
    it('renders correctly', () => {
      const { getByTestId } = render(
        <Button {...globe.args} onPress={() => console.log('clicked')} />
      );
      expect(getByTestId('button')).toHaveTextContent('');
    });
});
