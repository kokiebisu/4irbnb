import React from 'react';

// Component
import BaseButton from '../button';

// element
import { Text } from '../../../elements/Text';

import { action } from '@storybook/addon-actions';

export default {
  component: BaseButton,
  title: 'Button/Base',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: <Text>click</Text>,
};

const actionsData = {
  onPress: action('onPress'),
};

export const small = () => {
  return <BaseButton sm {...buttonData} {...actionsData} />;
};

export const medium = () => {
  return <BaseButton md {...buttonData} {...actionsData} />;
};

export const large = () => {
  return <BaseButton lg {...buttonData} {...actionsData} />;
};
