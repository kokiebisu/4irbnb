import React from 'react';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import animation from '../../../styles/animation.module.scss';
import styles from '../../../styles/index.module.scss';
import { DoubleBed } from '../../../public/svg/original';
import { ArrangementsCardProps } from './props';

export const ArrangementsCard: React.FC<ArrangementsCardProps> = ({
  card = {
    type: 'Bedroom',
    beds: [{ type: 'double bed', count: 1 }],
  },
}) => {
  return (
    <div
      className={[
        shape['w--48'],
        space['p-t--4'],
        space['p-l--12'],
        space['p-b--4'],
        space['p-r--4'],
      ].join(' ')}>
      <div className={[space['p-t--4'], space['p-b--8']].join(' ')}>
        <DoubleBed width={14} />
      </div>
      <p className={[space['p-t--4'], color['c--gray__2']].join(' ')}>
        Bedroom
      </p>
      <div>
        {card.beds.map((bed) => {
          return (
            <p className={[color['c--gray__2']].join(' ')}>
              {bed.count} {bed.type}
            </p>
          );
        })}
      </div>
    </div>
  );
};
