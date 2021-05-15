import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  LoginPrototypeTemplate,
  LoginPrototypeTemplateProps,
} from './template';

export default {
  title: 'Prototypes/Login',
  component: LoginPrototypeTemplate,
} as Meta;

const LoginPrototypeStory: Story<LoginPrototypeTemplateProps> = (args) => (
  <LoginPrototypeTemplate {...args} />
);

export const Login = LoginPrototypeStory.bind({});
Login.args = {};
