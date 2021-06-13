import { Icon } from '@atoms';
import { Story, Meta } from '@storybook/react';
import { AuthButtonTemplate, AuthButtonTemplateProps } from './template';

const items = {
  email: <Icon variant="general" generalType="email" width={17} height={17} />,
  facebook: <Icon variant="logo" logoType="facebook" width={17} height={17} />,
  google: <Icon variant="logo" logoType="google" width={17} height={17} />,
  apple: <Icon variant="logo" logoType="apple" width={17} height={17} />,
};

export default {
  title: 'Atoms/Button',
  component: AuthButtonTemplate,
  
} as Meta;

const ButtonStory: Story<AuthButtonTemplateProps> = (args) => (
  <AuthButtonTemplate {...args} />
);

export const Auth = ButtonStory.bind({});
Auth.args = {
  icon: <Icon variant="general" generalType="email" fill="gray" width={17} height={17} />,
  name: 'Email',
  disabled: false,
  onClick: () => alert('Triggered onClick'),
  stretched: false,
};

Auth.argTypes={
  icon: {
    options: Object.keys(items),
    mapping: items,
    control: {
      type: 'select',
      labels: {
        email: 'Email',
        facebook: 'Facebook',
        google: 'Google',
        apple: 'Apple',
      },
    },
  },
},