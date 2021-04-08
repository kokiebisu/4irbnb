import { Bullet, $Bullet } from '@bullet';
import { Button, $Button } from '@button';
import space from '@styles/space.module.scss';
import section from '@template/index.module.scss';

export interface AmenitiesTemplateProps {
  title?: string;
  amenities?: string[];
}

/**
 * Renders the amenity section
 * @param {string} title - Title of the section
 * @param {Object[]} amenities - List of amenities
 */
export const AmenitiesTemplate: React.FC<AmenitiesTemplateProps> = ({
  title,
  amenities,
}) => {
  return (
    <div>
      <div>
        <h3 className="font-medium mb-5 text-gray-700 text-2xl">{title}</h3>
      </div>
      <div
        className={[
          section['display__amenities--wrapper'],
          space['m-b--32'],
        ].join(' ')}
      >
        {amenities.map((amenity, index) => {
          return (
            <Bullet
              key={index}
              variant={$Bullet.AMENITY}
              amenityType={amenity}
            />
          );
        })}
      </div>
      <div
        style={{ width: 300 }}
        className={[space['m-t--14'], space['m-b--14']].join(' ')}
      >
        <Button
          variant={$Button.BORDER}
          size="md"
          title="Show all 40 amenities"
        />
      </div>
    </div>
  );
};
