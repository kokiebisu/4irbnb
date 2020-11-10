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
  filterCount = 1,
  location = 'Location',
  guests = 8000,
  average = 4.9,
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
  const filters = [
    { name: 'Cacellation flexibility' },
    { name: 'Type of place' },
    { name: 'Price' },
    { name: 'Instant Book' },
    { name: 'More filters' },
  ];
  return (
    <div className={[space['m-t--24']].join(' ')}>
      <div>
        <p className={[font['size--14']].join(' ')}>300+ stays</p>
      </div>
      <div>
        <h3 className={[font['size--32']].join(' ')}>Stays in Sechelt</h3>
      </div>
      <div className={[space['m-v--22']].join(' ')}>
        <div className={[shape['from__md--flex']].join(' ')}>
          {filters.map((filter, index) => {
            return (
              <div key={index} className={[space['m-r--8']].join(' ')}>
                <Button type='filter' name={filter.name} />
              </div>
            );
          })}
        </div>
        <div className={[shape['only__sm']].join(' ')}>
          <Button type='filter' name={`filters ${filterCount}`} />
        </div>
      </div>
      {location && (
        <div>
          <div className={[space['m-b--16']].join(' ')}>
            <p className={[color['c--gray__1'], font['size--14']].join(' ')}>
              Enter dates and number of guests to see the total price per night.
            </p>
          </div>
          <div
            style={{ backgroundColor: 'lightgray', height: 1, width: '100%' }}
          />
          <div className={[layout['flex'], layout['items-center']].join(' ')}>
            <div
              className={[
                space['m-r--12'],
                space['p-v--8'],
                space['m-v--8'],
              ].join(' ')}>
              <img
                src='https://a0.muscache.com/airbnb/static/packages/icon-uc-trophy.9ee78aa1.gif'
                style={{ width: 40 }}
              />
            </div>
            <div>
              <h3 className={[font['size--14']].join(' ')}>
                More than {guests} guests have stayed in {location}. On average
                they rated their stays {average} out of 5 stars.
              </h3>
            </div>
          </div>
        </div>
      )}
      <div>
        {stays.map((stay, index) => {
          return (
            <div key={index}>
              <Card
                extendsTo={[color['b-t--white__2']].join(' ')}
                type='stay'
                {...stay}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
