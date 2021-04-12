import { Story, Meta } from '@storybook/react';
import { BirthdateInput, BirthdateInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: BirthdateInput,
} as Meta;

const InputStory: Story<BirthdateInputProps> = (args) => (
  <BirthdateInput {...args} />
);

export const Birthdate = InputStory.bind({});
Birthdate.args = {
  onChange: () => alert('on change'),
  value: '1995',
  direction: undefined,
  errors: false,
  dateType: 'year',
};
