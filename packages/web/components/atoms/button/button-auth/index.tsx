import { $Icon, Icon } from '@icons';

export interface AuthButtonProps {
  authType?: 'email' | 'facebook' | 'google' | 'apple';
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
    <div className="border-gray-300 border-solid border-2 hover:border-black bg-transparent block w-full px-4 py-3 rounded-lg">
      <div className="relative w-full flex justify-center">
        <div className="absolute left-0">{types[authType].icon}</div>
        <div>
          <h3 className="text-sm text-gray-700">
            Continue with {types[authType].name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export const auth = (props) => {
  return {
    auth: <AuthButton {...props} />,
  };
};
