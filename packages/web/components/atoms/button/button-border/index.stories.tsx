import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BorderButton, BorderButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: BorderButton,
} as Meta;

const ButtonStory: Story<BorderButtonProps> = (args) => (
  <BorderButton {...args} />
);

export const Border = ButtonStory.bind({});
Border.args = {
  title: 'Title',
  inverse: false,
  size: 'md',
  bold: false,
};
