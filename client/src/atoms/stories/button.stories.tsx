import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, Button } from 'atoms';
import { ElementProps } from 'atoms/Button';

export default {
  title: 'Design Systems/Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' }, label: { control: 'text' } },
} as Meta;

const buttonData = {
  children: <Text>Button</Text>,
};

const Template: Story<ElementProps> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = { size: 'sm', ...buttonData };

export const Medium = Template.bind({});
Medium.args = { size: 'md', ...buttonData };

export const Large = Template.bind({});
Large.args = { size: 'lg', ...buttonData };

export const Inverse = Template.bind({});
Inverse.args = { size: 'md', inverse: true, ...buttonData };
