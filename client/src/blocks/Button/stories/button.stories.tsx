import React from 'react';

// Component
import { BaseButton } from '../../../elements/Button';

// element
import { Text } from '../../../elements/Text';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Design Systems|Blocks/Button/Base',
  parameters: {
    component: BaseButton,
    componentSubtitle: 'Displays the default button',
  },
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: <Text>click</Text>,
};

const actionsData = {
  onPress: action('onPress'),
};

export const Small = () => {
  return <BaseButton sm {...buttonData} {...actionsData} />;
};

export const Medium = () => {
  return <BaseButton md {...buttonData} {...actionsData} />;
};

export const Large = () => {
  return <BaseButton lg {...buttonData} {...actionsData} />;
};
