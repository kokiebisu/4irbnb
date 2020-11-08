import React from 'react';

import { Button } from '../../../components/atoms/button/button.component';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import { Star } from '../../../public/svg/original';
import { AvailabilityModalProps } from './props';

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({
  ratings = 4.99,
  reviews = 271,
}) => {
  return (
    <div
      className={[
        layout['items-center'],
        layout['justify-between'],
        layout['flex'],
        color['b-t--white__2'],
        space['p--16'],
        color['bg--white__0'],
      ].join(' ')}>
      <div>
        <p>Add dates for prices</p>
        <div className={[layout['flex'], layout['items-center']].join(' ')}>
          <div>
            <Star width={12} />
          </div>
          <div>
            <span
              className={[
                layout['inline-block'],
                font['size--12'],
                space['m-l--4'],
              ].join(' ')}>
              {ratings}
            </span>
            <span
              className={[
                layout['inline-block'],
                font['size--12'],
                color['c--white__3'],
                space['m-l--4'],
              ].join(' ')}>
              ({reviews})
            </span>
          </div>
        </div>
      </div>
      <div>
        <Button type='primary' title='Check availability' />
      </div>
    </div>
  );
};
