import React from 'react';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import {
  CarbonMonoxideAlarm,
  Kitchen,
  PrivateEntrance,
  SmokeAlarm,
  Heating,
  TV,
} from '../../../public/svg/original';
import { AmenityBulletProps } from './props';

export const AmenityBullet: React.FC<AmenityBulletProps> = ({
  type = 'kitchen',
  title = 'Bullet point here',
  removed = false,
}) => {
  const amenityTypes = {
    smoke: <SmokeAlarm width={18} />,
    tv: <TV width={18} />,
    kitchen: <Kitchen width={24} />,
    heating: <Heating width={18} />,
    entrance: <PrivateEntrance width={18} />,
    carbon: <CarbonMonoxideAlarm width={18} />,
  };
  return (
    <div
      className={[
        layout['flex'],
        layout['items-center'],
        space['p--4'],
        shape['w--50p'],
      ].join(' ')}>
      {amenityTypes[type]}
      {removed ? (
        <s className={[space['m-l--16'], font['weight--100']].join(' ')}>
          {title}
        </s>
      ) : (
        <p className={[space['m-l--16'], font['weight--100']].join(' ')}>
          {title}
        </p>
      )}
    </div>
  );
};
