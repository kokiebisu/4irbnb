import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../button.component';
import { cookie, menu, host, globe } from '../button.stories';

describe('Base Button', () => {
  it('renders correctly for host button', () => {
    const { getByTestId } = render(
      <Button {...host.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Become a host');
  });
  it('renders correctly for globe button', () => {
    const { getByTestId } = render(
      <Button {...globe.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('');
  });
  it('renders correctly for menu button', () => {
    const { getByTestId } = render(
      <Button {...menu.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('');
  });
  it('renders correctly for menu button', () => {
    const { getByTestId } = render(
      <Button {...cookie.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Save Settings');
  });
});
