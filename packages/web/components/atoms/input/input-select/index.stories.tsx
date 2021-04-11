import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SelectInput, SelectInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: SelectInput,
} as Meta;

const InputStory: Story<SelectInputProps> = (args) => <SelectInput {...args} />;

export const Select = InputStory.bind({});
Select.args = {
  onChange: () => alert('on change'),
  value: 'Apartment',
  direction: null,
  errors: false,
  disabled: false,
  inputType: 'Bed and breakfast',
};
