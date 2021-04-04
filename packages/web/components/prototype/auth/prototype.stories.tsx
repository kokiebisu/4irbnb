import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Prototype, PrototypeProps, $Prototype } from '@prototype/auth';

import color from '@styles/color.module.scss';
import layout from '@styles/layout.module.scss';
import shape from '@styles/shape.module.scss';
import space from '@styles/space.module.scss';

export default {
  title: 'Prototypes/Auth',
  component: Prototype,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const AuthPrototypeStory: Story<PrototypeProps> = (args) => (
  <Prototype {...args} />
);

export const auth = AuthPrototypeStory.bind({});
auth.args = {
  variant: 'auth',
  extendsTo: [
    color['bg--transparent'],
    layout['block'],
    shape['w--full'],
    space['p-h--12'],
    space['p-v--12'],
    shape['br--8'],
  ].join(' '),
};

export const Login = AuthPrototypeStory.bind({});
Login.args = {
  variant: $Prototype.LOGIN,
};

export const Signup = AuthPrototypeStory.bind({});
Signup.args = {
  variant: $Prototype.SIGNUP,
};

export const ForgotPassword = AuthPrototypeStory.bind({});
ForgotPassword.args = {
  variant: $Prototype.FORGOTPASSWORD,
};

export const Exists = AuthPrototypeStory.bind({});
Exists.args = {
  variant: $Prototype.EXISTS,
};
