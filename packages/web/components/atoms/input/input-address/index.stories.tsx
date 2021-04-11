import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AddressInput, AddressInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: AddressInput,
} as Meta;

const InputStory: Story<AddressInputProps> = (args) => (
  <AddressInput {...args} />
);

export const Address = InputStory.bind({});
Address.args = {
  onChange: () => alert('on change'),
  value: 'value',
  direction: null,
};
