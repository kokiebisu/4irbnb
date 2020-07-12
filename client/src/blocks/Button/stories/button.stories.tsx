import React from 'react';

// Component
import { Button } from '../../../elements/Button';

// element
import { Text } from '../../../elements/Text';

import { action } from '@storybook/addon-actions';

export default {
  component: Button,
  title: 'Blocks/Button/Base',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: <Text>click</Text>,
};

const actionsData = {
  onPress: action('onPress'),
};

export const small = () => {
  return <Button sm {...buttonData} {...actionsData} />;
};

export const medium = () => {
  return <Button md {...buttonData} {...actionsData} />;
};

export const large = () => {
  return <Button lg {...buttonData} {...actionsData} />;
};
