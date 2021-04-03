import font from '@styles/font.module.scss';
import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';
import layout from '@styles/layout.module.scss';

import { Card, $Card } from '@card';

export interface ParticipateTemplateProps {
  participatingMethods?: string[];
}

/**
 * Renders the participate section
 * @param {string[]} participates - Ways to participate
 */
export const ParticipateTemplate: React.FC<ParticipateTemplateProps> = ({
  participatingMethods,
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
          ].join(' ')}
        >
          How to participate
        </h3>
      </div>
      <div className={[layout['flex'], space['m-b--32']].join(' ')}>
        {participatingMethods.map((participate, index) => {
          return (
            <div key={index} className={[space['m-r--16']].join(' ')}>
              <Card variant={$Card.PARTICIPATE} categoryType={participate} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
