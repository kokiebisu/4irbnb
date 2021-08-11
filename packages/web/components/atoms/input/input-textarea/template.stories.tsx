import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextAreaInputTemplate, TextAreaInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: TextAreaInputTemplate,
} as Meta;

const InputStory: Story<TextAreaInputTemplateProps> = (args) => (
  <TextAreaInputTemplate {...args} />
);

export const TextArea = InputStory.bind({});
TextArea.args = {
  value: 'Text area',
  onChange: () => alert('on change'),
  limit: 50,
};
