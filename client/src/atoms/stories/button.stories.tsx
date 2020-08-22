import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
// atoms
import { Text, Button } from 'atoms';
import { CustomProps } from 'molecules/Button';

export default {
  title: 'Button/Base',
  component: Button,
  excludeStories: /.*Data$/,
} as Meta;

const buttonData = {
  children: <Text>click</Text>,
};

const actionsData = {
  onPress: action('onPress'),
};

const Template: Story<CustomProps> = (args) => <Button {...args} />;

export const Medium = Template.bind({});
Medium.args = { md: true, ...buttonData, ...actionsData };

export const Large = Template.bind({});
Large.args = { lg: true, ...buttonData, ...actionsData };

export const SmallInverse = Template.bind({});
SmallInverse.args = { lg: true, inverse: true, ...buttonData, ...actionsData };
