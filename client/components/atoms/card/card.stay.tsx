import React from 'react';

import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import responsive from '../../../styles/responsive.module.scss';
import { StaysCardProps } from './props';
import { Heart } from '../../../public/svg/original';
import { Bullet } from '../bullet/bullet.component';
import { ImageSlider } from '../../../components/particles/image.slider';
import { Card } from './card.component';

export const StayCard: React.FC<StaysCardProps> = ({
  images = [
    'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
  ],
  typeStay = 'Entire apartment',
  location = 'Vacation',
  title = 'Exquisite Home In The Heart Of YALETOWN',
  accomodations = {
    guests: 1,
    bedroom: 1,
    beds: 1,
    bath: 1,
  },
  characteristics = ['wifi'],
  ratings = 5,
  reviews = 249,
}) => {
  return (
    <div>
      <div
        className={[responsive['b_to_n--sm'], space['m-b--32--sm']].join(' ')}>
        <Card type='horizontal' />
      </div>
      <div className={[responsive['n_to_b--sm']].join(' ')}>
        <div className={[space['p-v--22']].join(' ')}>
          <div
            className={[layout['flex'], layout['justify-between']].join(' ')}>
            <div className={[layout['flex']].join(' ')}>
              <div
                style={{
                  width: 300,
                  minHeight: 200,
                  marginRight: 15,
                }}>
                <div className={[shape['br--12'], shape['h--full']].join(' ')}>
                  <ImageSlider slides={images} />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <div>
                  <p
                    className={[color['c--gray__1'], font['size--14']].join(
                      ' '
                    )}>
                    {typeStay} in {location}
                  </p>
                  <h4
                    className={[
                      font['weight--300'],
                      space['m-v--4'],
                      font['size--17'],
                    ].join(' ')}>
                    {title}
                  </h4>
                  <div
                    className={[color['bg--white__2'], space['m-v--8']].join(
                      ' '
                    )}
                    style={{ width: 45, height: 1 }}></div>
                  <div>
                    <span
                      className={[color['c--gray__1'], font['size--14']].join(
                        ' '
                      )}>
                      {accomodations.guests} guests
                    </span>
                    <span
                      className={[color['c--gray__1'], font['size--14']].join(
                        ' '
                      )}>
                      {' '}
                      ·{' '}
                    </span>
                    <span
                      className={[color['c--gray__1'], font['size--14']].join(
                        ' '
                      )}>
                      {accomodations.bedroom} bedroom
                    </span>
                    <span
                      className={[color['c--gray__1'], font['size--14']].join(
                        ' '
                      )}>
                      {' '}
                      ·{' '}
                    </span>
                    <span
                      className={[color['c--gray__1'], font['size--14']].join(
                        ' '
                      )}>
                      {accomodations.beds} beds
                    </span>
                    <span
                      className={[color['c--gray__1'], font['size--14']].join(
                        ' '
                      )}>
                      {' '}
                      ·{' '}
                    </span>
                    <span
                      className={[color['c--gray__1'], font['size--14']].join(
                        ' '
                      )}>
                      {accomodations.bath} bath
                    </span>
                  </div>
                  <div>
                    {characteristics.map((characteristic, index) => {
                      return (
                        <span
                          key={index}
                          className={[
                            color['c--gray__1'],
                            font['size--14'],
                          ].join(' ')}>
                          {characteristic}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Bullet type='rating' />
                </div>
              </div>
            </div>
            <div>
              <Heart fill='white' width={24} stroke='black' strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
