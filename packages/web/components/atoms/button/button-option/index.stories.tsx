import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OptionButton, OptionButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: OptionButton,
} as Meta;

const ButtonStory: Story<OptionButtonProps> = (args) => (
  <OptionButton {...args} />
);

export const Option = ButtonStory.bind({});
Option.args = {
  name: 'Option',
  bold: false,
};
