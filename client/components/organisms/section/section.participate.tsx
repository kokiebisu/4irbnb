import React from 'react';

import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import section from './section.module.scss';
import { Card } from '../../../components/atoms/card/card.component';
import { ParticipateSectionProps } from './props';
import layout from '../../../styles/layout.module.scss';

export const ParticipateSection: React.FC<ParticipateSectionProps> = ({
  categories = ['call', 'private'],
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
          How to participate
        </h3>
      </div>
      <div className={[layout['flex'], space['m-b--32']].join(' ')}>
        {categories.map((category, index) => {
          return (
            <div key={index} className={[space['m-r--16']].join(' ')}>
              <Card type='participate' categoryType={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
