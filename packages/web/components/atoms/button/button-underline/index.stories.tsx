import React from 'react';
import { Story, Meta } from '@storybook/react';
import { UnderlineButton, UnderlineButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: UnderlineButton,
} as Meta;

const ButtonStory: Story<UnderlineButtonProps> = (args) => (
  <UnderlineButton {...args} />
);

export const Underline = ButtonStory.bind({});
Underline.args = {
  title: 'Title here',
  font: 14,
  bold: false,
  unselected: false,
};
