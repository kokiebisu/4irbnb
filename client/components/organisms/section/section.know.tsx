import React from 'react';

import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import { KnowSectionProps } from './props';
import { Bullet } from '../../../components/atoms/bullet/bullet.component';

export const KnowSection: React.FC<KnowSectionProps> = ({
  houseRules = [
    'checkin',
    'checkout',
    'self',
    'children',
    'smoking',
    'pets',
    'parties',
  ],
  healths = ['cleaning', 'distancing', 'caution', 'check'],
}) => {
  return (
    <div>
      <div>
        <h3
          className={[
            font['weight--500'],
            space['m-b--20'],
            color['c--gray__3'],
            font['size--24'],
          ].join(' ')}>
          Things to know
        </h3>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 20,
        }}
        className={[].join(' ')}>
        <div>
          <div className={[space['m-b--16']].join(' ')}>
            <h3>House rules</h3>
          </div>
          <div className={[space['m-b--32']].join(' ')}>
            {houseRules.map((item, index) => {
              return (
                <div key={index} className={[space['m-b--6']].join(' ')}>
                  <Bullet type='know' categoryType={item} />
                </div>
              );
            })}
          </div>
          <div>
            <u>Show all</u>
          </div>
        </div>

        <div>
          <div className={[space['m-b--16']].join(' ')}>
            <h3>Health & safety</h3>
          </div>
          <div className={[space['m-b--32']].join(' ')}>
            {healths.map((item, index) => {
              return (
                <div key={index} className={[space['m-b--6']].join(' ')}>
                  <Bullet type='know' categoryType={item} />
                </div>
              );
            })}
          </div>
          <div>
            <u>Show all</u>
          </div>
        </div>
        <div>
          <div className={[space['m-b--16']].join(' ')}>
            <h3>Cancellation policy</h3>
          </div>
          <div className={[space['m-b--32']].join(' ')}>
            <p className={[font['weight--100']].join(' ')}>
              Add your trip to get the cancellation details for this stay.
            </p>
          </div>
          <div>
            <u>Add dates</u>
          </div>
        </div>
      </div>
    </div>
  );
};
