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
                  <span
                    className={[color['c--gray__2'], font['weight--100']].join(
                      ' '
                    )}>
                    {guests} {guests > 1 ? 'guests' : 'guest'}
                  </span>
                </div>
                <div className={[space['m-r--4']].join(' ')}>
                  <span> · </span>
                  <span
                    className={[color['c--gray__2'], font['weight--100']].join(
                      ' '
                    )}>
                    {bedrooms} {bedrooms > 1 ? 'bedrooms' : 'bedroom'}
                  </span>
                </div>
                <div className={[space['m-r--4']].join(' ')}>
                  <span> · </span>
                  <span
                    className={[color['c--gray__2'], font['weight--100']].join(
                      ' '
                    )}>
                    {beds} {beds > 1 ? 'beds' : 'bed'}
                  </span>
                </div>
                <div className={[space['m-r--4']].join(' ')}>
                  <span> · </span>
                  <span
                    className={[color['c--gray__2'], font['weight--100']].join(
                      ' '
                    )}>
                    {bathrooms} {bathrooms > 1 ? 'baths' : 'bath'}
                  </span>
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
              shape['h--60'],
              shape['w--60'],
            ].join(' ')}
            src={imgUrl}
          />
        </div>
      </div>
      <div className={[space['m-v--12'], color['b-t--white__2']].join(' ')}>
        <div className={[space['p-v--4']].join(' ')}>
          <Bullet
            extendsTo={[space['m-t--24']].join(' ')}
            type='characteristic'
            characteristicType='house'
          />
          <Bullet
            extendsTo={[space['m-t--24']].join(' ')}
            type='characteristic'
            characteristicType='sparkle'
          />
          <Bullet
            extendsTo={[space['m-t--24']].join(' ')}
            type='characteristic'
            characteristicType='door'
          />
          <Bullet
            extendsTo={[space['m-t--24']].join(' ')}
            type='characteristic'
            characteristicType='calendar'
          />
          <Bullet
            extendsTo={[space['m-t--24']].join(' ')}
            type='characteristic'
            characteristicType='guidelines'
          />
        </div>
      </div>
    </>
  );
};
