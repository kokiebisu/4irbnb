import React from 'react';

// Component
import { BaseButton } from '../button';

import { Text } from '../../../elements/Text';

import { action } from '@storybook/addon-actions';

export default {
  component: BaseButton,
  title: 'Button/Base',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: 'click',
};

const actionsData = {
  onPress: action('onPress'),
};

export const Small = () => {
  return <BaseButton size={3} {...buttonData} {...actionsData} />;
};
