import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ForgotPasswordPrototypeTemplate,
  ForgotPasswordPrototypeTemplateProps,
} from './template';

export default {
  title: 'Prototypes/ForgotPassword',
  component: ForgotPasswordPrototypeTemplate,
} as Meta;

const ForgotPasswordPrototypeStory: Story<ForgotPasswordPrototypeTemplateProps> = (
  args
) => <ForgotPasswordPrototypeTemplate {...args} />;

export const ForgotPassword = ForgotPasswordPrototypeStory.bind({});
ForgotPassword.args = {};
