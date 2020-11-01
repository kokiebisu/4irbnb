import * as React from 'react';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import { CharacteristicsSectionProps } from './props';
import { Bullet } from '../../../components/atoms/bullet/bullet.component';

export const CharacteristicsSection: React.FC<CharacteristicsSectionProps> = ({
  stayType = 'Type',
  host = 'Host',
  guests = 1,
  bedrooms = 1,
  beds = 1,
  bathrooms = 1,
  imgUrl = 'https://a0.muscache.com/im/pictures/user/ca3ae8e3-997b-4ec6-b3af-139dd46be44b.jpg?im_w=240',
}) => {
  return (
    <>
      <div
        className={[
          layout['items-center'],
          layout['justify-between'],
          space['m-t--4'],
        ].join(' ')}>
        <div
          className={[layout['flex'], space['p-v--8']].join(' ')}
          style={{ width: '75%' }}>
          <div
            className={[space['m-t--8'], layout['justify-center']].join(' ')}>
            <div className={[layout['flex'], layout['flex-col']].join(' ')}>
              <h3 className={[font['weight--500']].join(' ')}>
                {stayType} hosted by {host}
              </h3>
              <div
                className={[
                  font['weight--300'],
                  layout['flex'],
                  layout['flex-wrap'],
                  space['p-b--6'],
                  space['p-t--3'],
                  color['c--gray__3'],
                ].join(' ')}>
                <div className={[space['m-r--4']].join(' ')}>
                  <p>
                    {guests} {guests > 1 ? 'guests' : 'guest'}
                  </p>
                </div>
                <div className={[space['m-r--4']].join(' ')}>
                  <p>
                    {bedrooms} {bedrooms > 1 ? 'bedrooms' : 'bedroom'}
                  </p>
                </div>
                <div className={[space['m-r--4']].join(' ')}>
                  <p>
                    {beds} {beds > 1 ? 'beds' : 'bed'}
                  </p>
                </div>
                <div className={[space['m-r--4']].join(' ')}>
                  <p>
                    {bathrooms} {bathrooms > 1 ? 'baths' : 'bath'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={[layout['flex'], layout['justify-end']].join(' ')}>
          <img
            style={{ objectFit: 'cover' }}
            className={[
              shape['br--circle'],
              shape['h--55'],
              shape['w--55'],
            ].join(' ')}
            src={imgUrl}
          />
        </div>
      </div>
      <div className={[space['m-v--12'], color['b-t--white__3']].join(' ')}>
        <Bullet type='characteristic' />
        <Bullet type='characteristic' />
        <Bullet type='characteristic' />
        <Bullet type='characteristic' />
        <Bullet type='characteristic' />
      </div>
    </>
  );
};
