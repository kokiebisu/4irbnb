import React from 'react';

import layout from '../../../styles/layout.module.scss';
import { CheckInverse } from '../../../public/svg/original';
import { BringBulletProps } from './props';
import space from '../../../styles/space.module.scss';

export const BringBullet: React.FC<BringBulletProps> = ({
  title = 'Description here',
}) => {
  return (
    <div className={[layout['flex']].join(' ')}>
      <div className={[space['m-r--16']].join(' ')}>
        <CheckInverse width={24} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};
