import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { screen } from '../src/styles/breakpoints';

addDecorator((storyFn) => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {storyFn()}
    </div>
  </ThemeProvider>
));

const customViewports = {
  sm: {
    name: 'sm',
    styles: {
      width: '560px',
      height: '750px',
    },
  },
  md: {
    name: 'md',
    styles: {
      width: '650px',
      height: '963px',
    },
  },
};

addParameters({
  viewport: {
    viewports: customViewports,
  },
});
