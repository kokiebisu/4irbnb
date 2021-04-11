import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ClosedInput, ClosedInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: ClosedInput,
} as Meta;

const InputStory: Story<ClosedInputProps> = (args) => <ClosedInput {...args} />;

export const Closed = InputStory.bind({});
Closed.args = {
  title: 'Title',
  flag: false,
  onClickSwitchToFalse: () => alert('on click switch to false'),
  onClickSwitchToTrue: () => alert('on click switch to true'),
};
