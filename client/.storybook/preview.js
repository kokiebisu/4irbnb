import React from 'react';
import { Fonts, GlobalStyles } from 'styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
};

const globalProvider = (Story, context) => {
  return (
    <div>
      <Fonts />
      <GlobalStyles />
      <Story {...context} />
    </div>
  );
};

export const decorators = [globalProvider];
