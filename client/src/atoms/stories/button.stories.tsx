import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
// atoms
import { Text, Button } from 'atoms';
import { CustomProps } from 'molecules/Button';

export default {
  title: 'Button/Base',
  component: Button,
  excludeStories: /.*Data$/,
  argTypes: { onPress: { action: 'clicked' }, label: { control: 'text' } },
} as Meta;

const buttonData = {
  children: <Text>click</Text>,
};

const Template: Story<CustomProps> = (args) => <Button {...args} />;

export const Medium = Template.bind({});
Medium.args = { md: true, ...buttonData };

export const Large = Template.bind({});
Large.args = { lg: true, ...buttonData };

export const SmallInverse = Template.bind({});
SmallInverse.args = { inverse: true, ...Large.args };
