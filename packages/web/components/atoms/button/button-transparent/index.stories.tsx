import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TransparentButton, TransparentButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: TransparentButton,
} as Meta;

const ButtonStory: Story<TransparentButtonProps> = (args) => (
  <TransparentButton {...args} />
);

export const Transparent = ButtonStory.bind({});
Transparent.args = {
  content: 'Button',
};
