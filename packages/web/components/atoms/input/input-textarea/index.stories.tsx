import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextAreaInput, TextAreaInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: TextAreaInput,
} as Meta;

const InputStory: Story<TextAreaInputProps> = (args) => (
  <TextAreaInput {...args} />
);

export const TextArea = InputStory.bind({});
TextArea.args = {
  value: 'Text area',
  onChange: () => alert('on change'),
  limit: 50,
};
