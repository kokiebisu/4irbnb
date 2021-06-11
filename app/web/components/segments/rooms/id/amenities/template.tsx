import { Bullet } from '@atoms';
import { Button } from '@atoms';
import section from '@template/index.module.scss';

export interface AmenitiesSegmentTemplateProps {
  title?: string;
  amenities?: string[];
}

/**
 * Renders the amenity section
 * @param {string} title - Title of the section
 * @param {Object[]} amenities - List of amenities
 */
export const AmenitiesSegmentTemplate: React.FC<AmenitiesSegmentTemplateProps> = ({
  title,
  amenities,
}) => {
  return (
    <div>
      <div>
        <h3 className="font-medium mb-5 text-gray-700 text-2xl">{title}</h3>
      </div>
      <div
        className={`mb-5 ${[section['display__amenities--wrapper']].join(' ')}`}
      >
        {amenities.map(
          (
            amenity:
              | 'smoke'
              | 'tv'
              | 'kitchen'
              | 'heating'
              | 'entrance'
              | 'carbon',
            index
          ) => {
            return (
              <Bullet key={index} variant="amenity" amenityType={amenity} />
            );
          }
        )}
      </div>
      <div style={{ width: 300 }} className="mt-3 mb-3">
        <Button variant="border" size="md" title="Show all 40 amenities" />
      </div>
    </div>
  );
};
