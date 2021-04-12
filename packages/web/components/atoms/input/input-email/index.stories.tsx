import { Story, Meta } from '@storybook/react';
import { EmailInput, EmailInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: EmailInput,
} as Meta;

const InputStory: Story<EmailInputProps> = (args) => <EmailInput {...args} />;

export const Email = InputStory.bind({});
Email.args = {
  onChange: () => alert('on change'),
  value: 'user@gmail.com',
  direction: undefined,
  errors: false,
};
