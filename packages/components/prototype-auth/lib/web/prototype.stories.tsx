/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Story, Meta } from '@storybook/react';
import { Prototype, PrototypeProps, $PROTOTYPE } from '..';

export default {
  title: 'Prototypes/Auth',
  component: Prototype,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const auth = TemplateStory.bind({});
auth.args = {
  variant: 'auth',
  extendsTo: {
    bg: 'transparent',
    display: 'block',
    width: '100%',
    padding: 12,
    borderRadius: 8,
  },
};
auth.argTypes = {
  title: {
    control: {
      type: 'select',
      options: ['Log in', 'Sign up'],
    },
  },
};

export const Login = TemplateStory.bind({});
Login.args = {
  variant: $PROTOTYPE.login,
};

export const Signup = TemplateStory.bind({});
Signup.args = {
  variant: $PROTOTYPE.signup,
};

export const ForgotPassword = TemplateStory.bind({});
ForgotPassword.args = {
  variant: $PROTOTYPE.forgotpassword,
};

export const Exists = TemplateStory.bind({});
Exists.args = {
  variant: $PROTOTYPE.exists,
};
