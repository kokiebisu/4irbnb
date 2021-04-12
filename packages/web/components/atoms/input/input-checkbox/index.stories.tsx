import { Story, Meta } from '@storybook/react';
import { CheckboxInput, CheckboxInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: CheckboxInput,
} as Meta;

const InputStory: Story<CheckboxInputProps> = (args) => (
  <CheckboxInput {...args} />
);

export const Checkbox = InputStory.bind({});
Checkbox.args = {
  onChange: () => alert('on change'),
  value: false,
  title: 'Title here',
  description: 'Description here',
};
