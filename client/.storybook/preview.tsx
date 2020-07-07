import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

addDecorator((storyFn) => (
  <ThemeProvider theme={{ mode: 'default' }}>
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
