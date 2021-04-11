import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GuestsInput, GuestsInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: GuestsInput,
} as Meta;

const InputStory: Story<GuestsInputProps> = (args) => <GuestsInput {...args} />;

export const Guests = InputStory.bind({});
Guests.args = {
  onChange: () => alert('on change'),
  value: 1,
  direction: undefined,
  errors: false,
};
