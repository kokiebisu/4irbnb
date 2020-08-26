import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Box } from 'atoms';
import { Header } from 'organisms/Header';
import { landing } from 'organisms/Header/stories/header.landing.stories';

describe('Landing Header', () => {
  it('renders text correctly', () => {
    const { getByText } = render(<Header {...landing.args} />);
    expect(getByText('header')).toBeInTheDocument();
  });
});
