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

export const Primary = () => {
  return <PrimaryButton {...buttonData} {...actionsData} />;
};
