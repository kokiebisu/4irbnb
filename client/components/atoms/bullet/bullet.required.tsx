import { Exclamation } from '../../../public/svg/original';
import React from 'react';
import { RequiredBulletProps } from './props';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';

export const RequiredBullet: React.FC<RequiredBulletProps> = ({ message }) => {
  return (
    <div className={[layout['flex'], layout['items-center']].join(' ')}>
      <div className={[space['m-r--4']].join(' ')}>
        <Exclamation width={16} stroke='#C54A32' strokeWidth={2} />
      </div>
      <div>
        <p
          style={{ color: '#C54A32' }}
          className={[font['size--12']].join(' ')}>
          {message}
        </p>
      </div>
    </div>
  );
};
