import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AnotherInput, AnotherInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: AnotherInput,
} as Meta;

const InputStory: Story<AnotherInputProps> = (args) => (
  <AnotherInput {...args} />
);

export const Another = InputStory.bind({});
Another.args = {
  onChange: () => alert('on change'),
};
