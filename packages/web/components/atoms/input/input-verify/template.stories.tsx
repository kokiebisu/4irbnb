import React from 'react';
import { Story, Meta } from '@storybook/react';
import { VerifyInputTemplate, VerifyInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: VerifyInputTemplate,
} as Meta;

const InputStory: Story<VerifyInputTemplateProps> = (args) => (
  <VerifyInputTemplate {...args} />
);

export const Verify = InputStory.bind({});
Verify.args = {
  value: '765-465-7642',
  onChange: () => alert('on change'),
};
