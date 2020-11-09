import React from 'react';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import shape from '../../../styles/shape.module.scss';
import space from '../../../styles/space.module.scss';
import button from './button.module.scss';
import { AuthButtonProps } from './props';
import { Email } from '../../../public/svg/original';
import { Apple, Facebook, Google } from '../../../public/svg/logo';
import { useAuthDispatch, useAuthState } from '../../../context/auth';

export const AuthButton: React.FC<AuthButtonProps> = ({
  platform = 'email',
}) => {
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  const categories = {
    email: {
      name: 'Email',
      icon: <Email width={17} />,
      handleClick() {
        if (authState.title === 'Log in') {
          return authDispatch({ type: 'login' });
        }
        return authDispatch({ type: 'signup' });
      },
    },
    facebook: {
      name: 'Facebook',
      icon: <Facebook width={17} />,
      handleClick() {
        alert('clicked facebook');
      },
    },
    google: {
      name: 'Google',
      icon: <Google width={17} />,
      handleClick() {
        alert('clicked google');
      },
    },
    apple: {
      name: 'Apple',
      icon: <Apple width={17} />,
      handleClick() {
        alert('clicked apple');
      },
    },
  };

  return (
    <button
      onClick={categories[platform].handleClick}
      className={[
        button['hover__auth'],
        color['bg--transparent'],
        layout['block'],
        shape['w--full'],
        space['p-h--12'],
        space['p-v--12'],
        shape['br--8'],
      ].join(' ')}>
      <div className={[layout['relative'], layout['all-center']].join(' ')}>
        <div className={[layout['al--0']].join(' ')}>
          {categories[platform].icon}
        </div>
        <div>
          <h3 className={[font['size--14'], color['c--gray__2']].join(' ')}>
            Continue with {categories[platform].name}
          </h3>
        </div>
      </div>
    </button>
  );
};
