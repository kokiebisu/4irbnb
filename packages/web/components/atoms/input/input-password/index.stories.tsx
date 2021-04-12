import { Story, Meta } from '@storybook/react';
import { PasswordInput, PasswordInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: PasswordInput,
} as Meta;

const InputStory: Story<PasswordInputProps> = (args) => (
  <PasswordInput {...args} />
);

export const Password = InputStory.bind({});
Password.args = {
  onChange: () => alert('on change'),
  value: 'password',
  direction: undefined,
  errors: false,
};
