import { Story, Meta } from '@storybook/react';
import { PasswordInputTemplate, PasswordInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: PasswordInputTemplate,
} as Meta;

const InputStory: Story<PasswordInputTemplateProps> = (args) => (
  <PasswordInputTemplate {...args} />
);

export const Password = InputStory.bind({});
Password.args = {
  onChange: () => alert('on change'),
  value: 'password',
  direction: undefined,
  errors: false,
};
