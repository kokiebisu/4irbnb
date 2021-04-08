import React from 'react';
import { useAuthDispatch, useAuthState } from '@context/auth';
import { $Icon, Icon } from '@icons';

export const getAuthContents = () => {
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();

  const auths = {
    email: {
      name: 'Email',
      icon: <Icon variant={$Icon.GENERAL} generalType="email" width={17} />,
      handleClick() {
        if (authState.title === 'Log in') {
          return authDispatch({ type: 'login' });
        }
        return authDispatch({ type: 'signup' });
      },
    },
    facebook: {
      name: 'Facebook',
      icon: <Icon variant={$Icon.LOGO} logoType="facebook" width={19} />,
      handleClick() {
        alert('clicked facebook');
      },
    },
    google: {
      name: 'Google',
      icon: <Icon variant={$Icon.LOGO} logoType="google" width={17} />,
      handleClick() {
        alert('clicked google');
      },
    },
    apple: {
      name: 'Apple',
      icon: <Icon variant={$Icon.LOGO} logoType="apple" width={17} />,
      handleClick() {
        alert('clicked apple');
      },
    },
  };

  return auths;
};
