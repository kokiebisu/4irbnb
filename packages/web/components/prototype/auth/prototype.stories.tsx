import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Prototype, PrototypeProps, $Prototype } from '@prototype/auth';

export default {
  title: 'Prototypes/Auth',
  component: Prototype,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const auth = TemplateStory.bind({});
auth.args = {
  variant: 'auth',
};

export const Login = TemplateStory.bind({});
Login.args = {
  variant: $Prototype.LOGIN,
};

export const Signup = TemplateStory.bind({});
Signup.args = {
  variant: $Prototype.SIGNUP,
};

export const ForgotPassword = TemplateStory.bind({});
ForgotPassword.args = {
  variant: $Prototype.FORGOTPASSWORD,
};

export const Exists = TemplateStory.bind({});
Exists.args = {
  variant: $Prototype.EXISTS,
};
