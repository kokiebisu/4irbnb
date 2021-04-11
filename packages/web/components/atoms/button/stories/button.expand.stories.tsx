import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExpandButton, ExpandButtonProps } from '../button.expand';

export default {
  title: 'Atoms/Button',
  component: ExpandButton,
} as Meta;

const ButtonStory: Story<ExpandButtonProps> = (args) => (
  <ExpandButton {...args} />
);

export const Expand = ButtonStory.bind({});
Expand.args = {
  title: 'Button',
};
