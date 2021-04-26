import { Icon } from '@icons';
import { AuthButtonTemplate } from './template';

export interface AuthButtonProps {
  authType?: 'email' | 'facebook' | 'google' | 'apple';
}

const AuthButton: React.FC<AuthButtonProps> = ({ authType, ...props }) => {
  const types = {
    email: {
      name: 'Email',
      icon: <Icon variant="general" generalType="email" width={17} />,
    },
    facebook: {
      name: 'Facebook',
      icon: <Icon variant="logo" logoType="facebook" width={19} />,
    },
    google: {
      name: 'Google',
      icon: <Icon variant="logo" logoType="google" width={17} />,
    },
    apple: {
      name: 'Apple',
      icon: <Icon variant="logo" logoType="apple" width={17} />,
    },
  };
  const data = types[authType];
  return <AuthButtonTemplate {...data} />;
};

export const auth = (props) => {
  return {
    auth: {
      component: <AuthButton {...props} />,
    },
  };
};
