import React from 'react';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import { ArrangementsSectionProps } from './props';
import { Card } from '../../../components/atoms/card/card.component';

export const ArrangementsSection: React.FC<ArrangementsSectionProps> = ({
  title = 'Title here',
  arrangements = [
    {
      type: 'Bedroom',
      beds: [{ type: 'double bed', count: 1 }],
    },
    {
      type: 'Bedroom',
      beds: [{ type: 'double bed', count: 1 }],
    },
  ],
}) => {
  return (
    <div>
      <div>
        <h3
          className={[
            space['m-v--8'],
            color['c--gray__3'],
            font['size--32'],
          ].join(' ')}>
          {title}
        </h3>
      </div>
      <div>
        {arrangements.map((arrangement, index) => {
          return <Card key={index} type='arrangements' card={arrangement} />;
        })}
      </div>
    </div>
  );
};
