import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LogoButton, LogoButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: LogoButton,
} as Meta;

const ButtonStory: Story<LogoButtonProps> = (args) => <LogoButton {...args} />;

export const Logo = ButtonStory.bind({});
Logo.args = {
  noName: false,
  fill: '#F5385D',
};
