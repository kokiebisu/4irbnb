import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../button.component';
import { privacy, menu, host, globe, border, banner } from '../button.stories';
import { ContextProvider } from '../../../../context/provider';

describe('Base Button', () => {
  it('renders correctly for host button', () => {
    const { getByTestId } = render(
      <Button {...host.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Become a host');
  });
  it('renders correctly for globe button', () => {
    const { getByTestId } = render(
      <ContextProvider>
        <Button {...globe.args} onPress={() => console.log('clicked')} />
      </ContextProvider>
    );
    expect(getByTestId('button')).toHaveTextContent('');
  });
  it('renders correctly for menu button', () => {
    const { getByTestId } = render(
      <ContextProvider>
        <Button {...menu.args} onPress={() => console.log('clicked')} />
      </ContextProvider>
    );
    expect(getByTestId('button')).toHaveTextContent('');
  });
  it('renders correctly for privacy button', () => {
    const { getByTestId } = render(
      <ContextProvider>
        <Button {...privacy.args} onPress={() => console.log('clicked')} />
      </ContextProvider>
    );
    expect(getByTestId('button')).toHaveTextContent('Button');
  });
  it('renders correctly for border button', () => {
    const { getByTestId } = render(
      <Button {...border.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Button');
  });
  it('renders correctly for banner button', () => {
    const { getByTestId } = render(
      <Button {...banner.args} onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Button');
  });
});
