import React from 'react';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import { House } from '../../../public/svg/original';
import { CharacteristicBulletProps } from './props';

export const CharacteristicBullet: React.FC<CharacteristicBulletProps> = ({
  type = 'house',
  title = 'Title',
  description = 'Description',
  guestnumber = 0,
  percentage = undefined,
}) => {
  const icons = {
    house: <House width={24} />,
  };

  return (
    <div className={[layout['flex'], space['m-v--8']].join(' ')}>
      <div className={[space['p-t--10'], space['m-r--8']].join(' ')}>
        {icons[type]}
      </div>
      <div>
        <h3 className={[color['c--gray__2']].join(' ')}>{title}</h3>
        <p className={[color['c--gray__3'], font['weight--300']].join(' ')}>
          {guestnumber ? guestnumber : null}
          {percentage ? `${percentage}%` : null}
          <span> </span>
          {description}
        </p>
      </div>
    </div>
  );
};
