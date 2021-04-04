import font from '@styles/font.module.scss';
import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';

import { Bullet, $Bullet } from '@bullet';

export interface BringTemplateProps {
  necessities?: string[];
}

/**
 * Renders the 'What to bring' section
 * @param {Object[]} necessities - List of things the users have to bring
 */
export const BringTemplate: React.FC<BringTemplateProps> = ({
  necessities,
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
          What to bring
        </h3>
      </div>
      <div className={[space['m-b--32']].join(' ')}>
        {necessities.map((necessity, index) => {
          return (
            <div key={index} className={[space['m-b--16']].join(' ')}>
              <Bullet variant={$Bullet.BRING} title={necessity} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
