import { Story, Meta } from '@storybook/react';
import { AuthButtonTemplate, AuthButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: AuthButtonTemplate,
} as Meta;

const ButtonStory: Story<AuthButtonTemplateProps> = (args) => (
  <AuthButtonTemplate {...args} />
);

export const Auth = ButtonStory.bind({});
Auth.args = {
  authType: 'email',
};
