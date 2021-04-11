import React from 'react';
import { Story, Meta } from '@storybook/react';
import { VerifyButton, VerifyButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: VerifyButton,
} as Meta;

const ButtonStory: Story<VerifyButtonProps> = (args) => (
  <VerifyButton {...args} />
);

export const Verify = ButtonStory.bind({});
Verify.args = {};
