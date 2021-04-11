import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PrimaryButton, PrimaryButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: PrimaryButton,
} as Meta;

const ButtonStory: Story<PrimaryButtonProps> = (args) => (
  <PrimaryButton {...args} />
);

export const Primary = ButtonStory.bind({});
Primary.args = {
  title: 'Button',
  size: 'md',
  fill: 'black',
  loading: false,
  disable: false,
  color: 'white',
  stretch: false,
};
Primary.argTypes = {
  color: {
    control: {
      disable: true,
    },
  },
};
