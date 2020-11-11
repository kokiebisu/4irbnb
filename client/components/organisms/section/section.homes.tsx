import { Button } from '../../../components/atoms/button/button.component';
import React from 'react';

import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import responsive from '../../../styles/responsive.module.scss';

import { HomesSectionProps } from './props';
import { Card } from '../../../components/atoms/card/card.component';
import { Bar } from '../bar/bar.component';

export const HomesSection: React.FC<HomesSectionProps> = ({
  layout = 'vertical',
  place = 'Location',
  title = 'Explore all 300+ stays',
  stays = [
    {
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
      ],
      typeStay: 'Entire apartment',
      location: 'Vacation',
      title: 'Exquisite Home In The Heart Of YALETOWN',
      accomodations: {
        guests: 1,
        bedroom: 1,
        beds: 1,
        bath: 1,
      },
      characteristics: ['wifi'],
      ratings: 5,
      reviews: 249,
    },
    {
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
      ],
      typeStay: 'Entire apartment',
      location: 'Vacation',
      title: 'Exquisite Home In The Heart Of YALETOWN',
      accomodations: {
        guests: 1,
        bedroom: 1,
        beds: 1,
        bath: 1,
      },
      characteristics: ['wifi'],
      ratings: 5,
      reviews: 249,
    },
    {
      images: [
        'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-46142496/original/f81fdaca-1791-4de6-ba56-d3e5ce9406d1.jpeg?im_w=720',
      ],
      typeStay: 'Entire apartment',
      location: 'Vacation',
      title: 'Exquisite Home In The Heart Of YALETOWN',
      accomodations: {
        guests: 1,
        bedroom: 1,
        beds: 1,
        bath: 1,
      },
      characteristics: ['wifi'],
      ratings: 5,
      reviews: 249,
    },
  ],
}) => {
  const layouts = {
    vertical: (
      <div
        className={
          title ? [space['m-t--45']].join(' ') : [space['m-t--24']].join(' ')
        }>
        {title && (
          <div>
            <h3 className={[font['size--22']].join(' ')}>{title}</h3>
          </div>
        )}
        <div>
          {stays.map((stay, index) => {
            return (
              <div key={index}>
                <Card
                  extendsTo={!title && [color['b-t--white__2']].join(' ')}
                  type='stay'
                  {...stay}
                />
              </div>
            );
          })}
        </div>
      </div>
    ),
  };

  return layouts[layout];
};
