import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PhoneNumberInput, PhoneNumberInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: PhoneNumberInput,
} as Meta;

const InputStory: Story<PhoneNumberInputProps> = (args) => (
  <PhoneNumberInput {...args} />
);

export const PhoneNumber = InputStory.bind({});
PhoneNumber.args = {
  onChange: () => alert('on change'),
  value: '778-142-2342',
  direction: undefined,
  errors: false,
};
