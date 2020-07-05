import React from 'react';

// Component
import { BaseButton } from '../button';

import { action } from '@storybook/addon-actions';

export default {
  component: BaseButton,
  title: 'Base',
  excludeStories: /.*Data$/,
  size: 'sm',
};

const buttonData = {
  children: 'click me',
};

const actionsData = {
  onPress: action('onPress'),
};

export const Small = () => {
  return <BaseButton size={3} {...buttonData} {...actionsData} />;
};

export const Medium = () => {
  return <BaseButton size={5} {...buttonData} {...actionsData} />;
};

export const Large = () => {
  return <BaseButton size={7} {...buttonData} {...actionsData} />;
};
