import React from 'react';
import { CheckInCardProps } from './props';
import card from './card.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';

export const CheckInCard: React.FC<CheckInCardProps> = () => {
  return (
    <div
      className={[
        card['display__checkin--wrapper'],
        card['position__checkin--wrapper'],
        shape['shadow--lg'],
        color['b--white__2'],
        card['w__checkin--wrapper'],
      ].join(' ')}
      style={{
        backgroundColor: 'white',
        zIndex: 50,
        borderRadius: 15,
      }}>
      <div
        className={[
          space['m-h--10'],
          layout['items-center'],
          layout['justify-between'],
          card['flex__checkin--content'],
        ].join(' ')}>
        <h3 className={[space['p-v--10']].join(' ')}>Add dates for prices</h3>
        <button
          className={[card['p__checkin--button']].join(' ')}
          style={{
            color: 'white',
            backgroundColor: 'pink',
            whiteSpace: 'nowrap',
            borderRadius: 15,
          }}>
          Check Availability
        </button>
      </div>
    </div>
  );
};
