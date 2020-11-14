import React from 'react';

/**
 * Styles
 */
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';

/**
 * Vectors
 */
import { DoubleBed } from '../../../public/svg/original';

/**
 * Props
 */
import { ArrangementsCardProps } from './props';

/**
 * Renders the arrangements card component
 * @param {Object} card - Information of the card
 */
export const ArrangementsCard: React.FC<ArrangementsCardProps> = ({
  card = {
    type: 'Bedroom',
    beds: [{ type: 'double bed', count: 1 }],
  },
}) => {
  return (
    <div
      style={{ width: 200 }}
      className={[
        shape['w--48'],
        space['p-v--25'],
        color['b--white__2'],
        shape['br--15'],
      ].join(' ')}>
      <div className={[space['p-l--14']].join(' ')}>
        <div className={[space['p-t--4'], space['p-b--8']].join(' ')}>
          <DoubleBed width={24} />
        </div>
        <p className={[space['p-t--4'], color['c--gray__2']].join(' ')}>
          Bedroom
        </p>
        <div>
          {card.beds.map((bed, index) => {
            return (
              <p key={index} className={[color['c--gray__2']].join(' ')}>
                {bed.count} {bed.type}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
