import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Fonts, GlobalStyles } from 'styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const globalProvider = (Story, context) => {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Fonts />
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [globalProvider];
