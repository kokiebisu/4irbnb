import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../button.component';
import { privacy, menu, host, globe, border, banner } from '../button.stories';

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
  it('renders correctly for privacy button', () => {
    const { getByTestId } = render(
      <Button {...privacy.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Save Settings');
  });
  it('renders correctly for border button', () => {
    const { getByTestId } = render(
      <Button {...border.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Donate');
  });
  it('renders correctly for banner button', () => {
    const { getByTestId } = render(
      <Button {...banner.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Explore nearby');
  });
});
