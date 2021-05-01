import React from 'react';
import { Story, Meta } from '@storybook/react';
import { VerifyButtonTemplate, VerifyButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: VerifyButtonTemplate,
} as Meta;

const ButtonStory: Story<VerifyButtonTemplateProps> = (args) => (
  <VerifyButtonTemplate {...args} />
);

export const Verify = ButtonStory.bind({});
Verify.args = {};
