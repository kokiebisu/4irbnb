import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Template } from '../template.component';
import { ContextProvider } from '../../../context/provider';
import { TemplateProps } from '../props';

export default {
  title: 'Design System/Templates/Auth',
  component: Template,
  argTypes: { onPress: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const auth = TemplateStory.bind({});
auth.args = {
  type: 'auth',
};

export const login = TemplateStory.bind({});
login.args = {
  type: 'login',
};

export const signup = TemplateStory.bind({});
signup.args = {
  type: 'signup',
};

export const forgotpassword = TemplateStory.bind({});
forgotpassword.args = {
  type: 'forgotpassword',
};
