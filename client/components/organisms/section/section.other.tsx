import React from 'react';

import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';
import { OtherSectionProps } from './props';

export const OtherSection: React.FC<OtherSectionProps> = ({
  location = 'Location',
  locations = [
    { name: 'Anchorage', url: '/' },
    { name: 'Talkeetna', url: '/' },
    { name: 'Wasilla', url: '/' },
    { name: 'Palmer', url: '/' },
    { name: 'Big Lake', url: '/' },
    { name: 'Willow', url: '/' },
    { name: 'Nancy Lake', url: '/' },
    { name: 'Houston', url: '/' },
    { name: 'Hatcher Pass', url: '/' },
    { name: 'Cantwell', url: '/' },
    { name: 'Glacier View', url: '/' },
    { name: 'Eureka Roadhouse', url: '/' },
  ],
}) => {
  return (
    <div className={[layout['container']].join(' ')}>
      <div>
        <h3
          className={[
            font['weight--500'],
            space['m-b--20'],
            color['c--gray__3'],
            font['size--22'],
          ].join(' ')}>
          Explore other options in and around {location}
        </h3>
      </div>
      <div className={[space['m-b--8']].join(' ')}>
        <div>
          <p className={[font['weight--100']].join(' ')}>
            More place to stay in Penafiel:
          </p>
        </div>
        <div>
          <span
            className={[font['weight--100'], color['c--gray__1']].join(' ')}>
            Apartments
          </span>
          <span
            className={[font['weight--100'], color['c--gray__1']].join(' ')}>
            {' '}
            ·{' '}
          </span>
          <span
            className={[font['weight--100'], color['c--gray__1']].join(' ')}>
            Houses
          </span>
          <span
            className={[font['weight--100'], color['c--gray__1']].join(' ')}>
            {' '}
            ·{' '}
          </span>
          <span
            className={[font['weight--100'], color['c--gray__1']].join(' ')}>
            Bed and breakfasts
          </span>
          <span
            className={[font['weight--100'], color['c--gray__1']].join(' ')}>
            {' '}
            ·{' '}
          </span>
          <span
            className={[font['weight--100'], color['c--gray__1']].join(' ')}>
            Lofts
          </span>
          <span
            className={[font['weight--100'], color['c--gray__1']].join(' ')}>
            {' '}
            ·{' '}
          </span>
          <span
            className={[font['weight--100'], color['c--gray__1']].join(' ')}>
            Villas
          </span>
        </div>
      </div>

      <div className={[layout['flex'], layout['justify-between']].join(' ')}>
        <ul
          style={{
            padding: 0,
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
          className={[shape['w--full']].join(' ')}>
          {locations.map((location) => {
            return (
              <li
                className={[font['weight--100'], color['c--gray__1']].join(
                  ' '
                )}>
                <div className={[space['m-b--18']].join(' ')}>
                  <p className={[font['size--15']].join(' ')}>
                    {location.name}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
