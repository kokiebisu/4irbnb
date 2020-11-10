import React from 'react';

import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import { nearbyPic } from '../../../content';
import { NearbyCardProps } from './props';
import card from './card.module.scss';

export const NearbyCard: React.FC<NearbyCardProps> = ({
  imgUrl = nearbyPic[0],
  city = 'City',
  hours = 1,
  size = 'sm',
}) => {
  const renderSize = () => {
    switch (size) {
      case 'sm':
        return [card['w__nearby--sm']].join(' ');
      case 'lg':
        return [card['w__nearby--lg']].join(' ');
      default:
        return;
    }
  };
  return (
    <div className={[layout['flex'], layout['items-center']].join(' ')}>
      <div className={`${renderSize()} ${[space['m-r--12']].join(' ')}`}>
        <img src={imgUrl} style={{ borderRadius: 10 }} />
      </div>
      <div>
        <h3 className={[font['size--15'], space['m-b--4']].join(' ')}>
          {city}
        </h3>
        <p className={[font['size--15']].join(' ')}>{hours} hour drive</p>
      </div>
    </div>
  );
};
