import React from 'react';
import { Fonts, GlobalStyles } from 'styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
