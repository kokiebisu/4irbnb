import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LimitInput, LimitInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: LimitInput,
} as Meta;

const InputStory: Story<LimitInputProps> = (args) => <LimitInput {...args} />;

export const Limit = InputStory.bind({});
Limit.args = {
  value: 'Title',
  onChange: () => alert('on change'),
  limit: 50,
};
