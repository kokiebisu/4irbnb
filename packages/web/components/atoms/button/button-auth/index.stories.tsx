import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AuthButton, AuthButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: AuthButton,
} as Meta;

const ButtonStory: Story<AuthButtonProps> = (args) => <AuthButton {...args} />;

export const Auth = ButtonStory.bind({});
Auth.args = {
  authType: 'email',
};
