import { $Icon, Icon } from '@icons';

enum kinds {
  email = 'email',
  facebook = 'facebook',
  google = 'google',
  apple = 'apple',
}

export interface AuthButtonProps {
  authType?: kinds;
}

/**
 * Renders the auth button component
 * @param {string} auth - Platform for the authentication
 */
export const AuthButton: React.FC<AuthButtonProps> = ({ authType }) => {
  const types = {
    email: {
      name: 'Email',
      icon: <Icon variant={$Icon.GENERAL} generalType="email" width={17} />,
    },
    facebook: {
      name: 'Facebook',
      icon: <Icon variant={$Icon.LOGO} logoType="facebook" width={19} />,
    },
    google: {
      name: 'Google',
      icon: <Icon variant={$Icon.LOGO} logoType="google" width={17} />,
    },
    apple: {
      name: 'Apple',
      icon: <Icon variant={$Icon.LOGO} logoType="apple" width={17} />,
    },
  };
  return (
    <div className="relative top-0 bottom-0 left-0 right-0">
      <div className="absolute left-0">{types[authType].icon}</div>
      <div>
        <h3 className="text-sm text-gray-700">
          Continue with {types[authType].name}
        </h3>
      </div>
    </div>
  );
};

export const auth = (props) => {
  return {
    auth: {
      component: <AuthButton {...props} />,
      style:
        'border-gray-300 border-solid border-2 hover:border-black bg-transparent block w-full p-4 py-3 rounded-lg',
    },
  };
};
