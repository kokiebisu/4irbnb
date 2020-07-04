import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator((storyFn) => (
  <div style={{ textAlign: 'center' }}>{storyFn()}</div>
));
