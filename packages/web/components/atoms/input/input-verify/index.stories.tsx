import React from 'react';
import { Story, Meta } from '@storybook/react';
import { VerifyInput, VerifyInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: VerifyInput,
} as Meta;

const InputStory: Story<VerifyInputProps> = (args) => <VerifyInput {...args} />;

export const Verify = InputStory.bind({});
Verify.args = {
  value: '765-465-7642',
  onChange: () => alert('on change'),
};
