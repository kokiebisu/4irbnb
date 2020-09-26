import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Fonts, Global } from 'styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const globalProvider = (Story, context) => {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Fonts />
      <Global />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [globalProvider];
