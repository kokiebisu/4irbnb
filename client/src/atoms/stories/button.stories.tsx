import React from 'react';
import { action } from '@storybook/addon-actions';

// atoms
import { Text, Button } from 'atoms';

export default {
  title: 'Design Systems|Molecules/Button/Base',
  parameters: {
    component: Button,
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
  return <Button sm {...buttonData} {...actionsData} />;
};

export const Medium = () => {
  return <Button md {...buttonData} {...actionsData} />;
};

export const Large = () => {
  return <Button lg {...buttonData} {...actionsData} />;
};

export const SmallInverse = () => {
  return <Button lg inverse {...buttonData} {...actionsData} />;
};
