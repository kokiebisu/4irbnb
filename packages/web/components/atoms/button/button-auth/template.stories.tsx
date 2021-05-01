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
  name: 'Email',
  icon: {
    variant: 'general' as const,
    generalType: 'email' as const,
    width: 17,
  },
};
