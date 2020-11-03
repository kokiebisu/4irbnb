import React from 'react';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import shape from '../../../styles/shape.module.scss';
import space from '../../../styles/space.module.scss';
import { ButtonLoginProps } from './props';
import { Email } from '../../../public/svg/original';

export const LoginButton: React.FC<ButtonLoginProps> = ({
  platform = 'Email',
  icon = <Email width={18} height={18} />,
}) => {
  return (
    <button
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
        <div className={[layout['al--0']].join(' ')}>{icon}</div>
        <div>
          <p className={[font['size--14'], color['c--gray__2']].join(' ')}>
            Continue with {platform}
          </p>
        </div>
      </div>
    </button>
  );
};
