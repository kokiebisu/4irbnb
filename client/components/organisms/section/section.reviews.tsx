import React from 'react';
import { Star } from '../../../public/svg/original';

import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import section from './section.module.scss';
import { ReviewsSectionProps } from './props';
import { Button } from '../../../components/atoms/button/button.component';
import { Bullet } from '../../../components/atoms/bullet/bullet.component';
import { Card } from '../../../components/atoms/card/card.component';

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  categories = [
    { type: 'Cleanliness', average: 5.0 },
    { type: 'Accuracy', average: 4.3 },
    { type: 'Communication', average: 4.4 },
    { type: 'Location', average: 4.8 },
    { type: 'Check-in', average: 4.9 },
    {
      type: 'Value',
      average: 4.9,
    },
  ],
  reviews = [
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/04d3499b-6cca-4d1a-acc4-1fc4444e1002.jpg?im_w=240',
      name: 'Person Name',
      date: 'October 2020',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/user/04d3499b-6cca-4d1a-acc4-1fc4444e1002.jpg?im_w=240',
      name: 'Person Name',
      date: 'October 2020',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ],
  total = 100,
  layoutType = 'room',
}) => {
  return (
    <>
      <div className={[space['m-v--8']].join(' ')}>
        <div
          className={[
            space['p-v--8'],
            layout['flex'],
            layout['items-center'],
          ].join(' ')}>
          <div className={[layout['flex'], layout['items-center']].join(' ')}>
            <div className={[space['m-r--6']].join(' ')}>
              <Star width={20} />
            </div>
            <h3
              className={[
                space['m-r--6'],
                font['size--22'],
                color['c--gray__3'],
              ].join(' ')}>
              4.93
            </h3>
            <h3
              className={[
                space['m-l--2'],
                font['size--22'],
                color['c--gray__3'],
              ].join(' ')}>
              (1 reviews)
            </h3>
          </div>
        </div>
        {layoutType === 'room' && (
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
            className={[space['m-t--12'], space['m-r--24']].join(' ')}>
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className={[
                    section['m__review--bullet'],
                    space['p-v--8'],
                  ].join(' ')}>
                  <Bullet
                    type='score'
                    category={category.type}
                    average={category.average}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div
          className={[
            shape['w-full'],
            space['m-t--16'],
            section['display__reviews--wrapper'],
          ].join(' ')}>
          {reviews.map((review, index) => {
            return (
              <div
                className={[section['m__review--card']].join(' ')}
                key={index}>
                <Card
                  type='review'
                  imgUrl={review.imgUrl}
                  description={review.description}
                />
              </div>
            );
          })}
        </div>
        <div className={[space['m-t--16']].join(' ')}>
          <Button type='border' size='md' title={`Show all ${total} reviews`} />
        </div>
      </div>
    </>
  );
};
