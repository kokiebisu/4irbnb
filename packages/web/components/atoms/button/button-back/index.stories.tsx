import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BackButton, BackButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: BackButton,
} as Meta;

const ButtonStory: Story<BackButtonProps> = (args) => <BackButton {...args} />;

export const Back = ButtonStory.bind({});
Back.args = {};
