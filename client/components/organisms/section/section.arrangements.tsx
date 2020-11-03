import React from 'react';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
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
            font['weight--500'],
            space['m-b--20'],
            color['c--gray__3'],
            font['size--24'],
          ].join(' ')}>
          {title}
        </h3>
      </div>
      <div style={{ marginLeft: -8, marginRight: -8 }}>
        <div
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
          className={[layout['flex']].join(' ')}>
          {arrangements.map((arrangement, index) => {
            return (
              <div style={{ marginRight: 12 }}>
                <Card key={index} type='arrangements' card={arrangement} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
