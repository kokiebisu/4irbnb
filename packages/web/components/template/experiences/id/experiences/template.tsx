import { Bullet, $Bullet } from '@bullet';

import font from '@styles/font.module.scss';
import space from '@styles/space.module.scss';

export interface ExperiencesTemplateProps {
  experiences?: string[];
}

/**
 * Renders the experiences section
 */
export const ExperiencesTemplate: React.FC<ExperiencesTemplateProps> = ({
  experiences,
}) => {
  return (
    <div className={[space['m-v--32']].join(' ')}>
      <div className={[space['m-b--24']].join(' ')}>
        <h3 className={[font['size--32']].join(' ')}>
          Airbnb Online Experiences
        </h3>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 15,
        }}
      >
        {experiences.map((experience, index) => {
          return (
            <div key={index}>
              <Bullet variant={$Bullet.EXPERIENCE} experience={experience} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
