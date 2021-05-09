import { Story, Meta } from '@storybook/react';
import { EmailInputTemplate, EmailInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: EmailInputTemplate,
} as Meta;

const InputStory: Story<EmailInputTemplateProps> = (args) => (
  <EmailInputTemplate {...args} />
);

export const Email = InputStory.bind({});
Email.args = {
  onChange: () => alert('on change'),
  value: 'user@gmail.com',
  direction: undefined,
  errors: false,
};
