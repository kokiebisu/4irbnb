import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AuthModalTemplate, AuthModalTemplateProps } from './template';

export default {
  title: 'Organisms/Modal',
  component: AuthModalTemplate,
} as Meta;

const ModalStory: Story<AuthModalTemplateProps> = (args) => (
  <AuthModalTemplate {...args} />
);

export const Auth = ModalStory.bind({});
Auth.args = {};
