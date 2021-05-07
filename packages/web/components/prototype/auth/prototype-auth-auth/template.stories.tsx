import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AuthPrototypeTemplate, AuthPrototypeTemplateProps } from './template';

export default {
  title: 'Prototypes/Auth',
  component: AuthPrototypeTemplate,
} as Meta;

const AuthPrototypeStory: Story<AuthPrototypeTemplateProps> = (args) => (
  <AuthPrototypeTemplate {...args} />
);

export const Auth = AuthPrototypeStory.bind({});
Auth.args = {
  variant: 'auth',
};
