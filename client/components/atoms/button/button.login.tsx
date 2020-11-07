import React from 'react';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import shape from '../../../styles/shape.module.scss';
import space from '../../../styles/space.module.scss';
import { ButtonLoginProps } from './props';
import { Email } from '../../../public/svg/original';
import { Apple, Facebook, Google } from '../../../public/svg/logo';

export const LoginButton: React.FC<ButtonLoginProps> = ({
  platform = 'email',
}) => {
  const categories = {
    email: {
      name: 'Email',
      icon: <Email width={17} />,
      handleClick() {
        console.log('clicked email');
      },
    },
    facebook: {
      name: 'Facebook',
      icon: <Facebook width={17} />,
      handleClick() {
        console.log('clicked facebook');
      },
    },
    google: {
      name: 'Google',
      icon: <Google width={17} />,
      handleClick() {
        console.log('clicked google');
      },
    },
    apple: {
      name: 'Apple',
      icon: <Apple width={17} />,
      handleClick() {
        console.log('clicked apple');
      },
    },
  };

  return (
    <button
      onClick={categories[platform].handleClick}
      style={{ border: '2px solid #B0B0B0' }}
      className={[
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
