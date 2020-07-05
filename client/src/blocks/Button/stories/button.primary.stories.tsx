import React from 'react';

import { PrimaryButton } from '../button.primary';

import { action } from '@storybook/addon-actions';

export default {
  component: PrimaryButton,
  title: 'Primary',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: 'click me',
};

const actionsData = {
  onPress: action('onPress'),
};

export const Small = () => {
  return <PrimaryButton size={3} {...buttonData} {...actionsData} />;
};

export const Medium = () => {
  return <PrimaryButton size={5} {...buttonData} {...actionsData} />;
};

export const Large = () => {
  return <PrimaryButton size={7} {...buttonData} {...actionsData} />;
};
