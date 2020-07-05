import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator((storyFn) => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {storyFn()}
  </div>
));
