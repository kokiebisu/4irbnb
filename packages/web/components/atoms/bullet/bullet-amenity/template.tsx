import { Icon } from '@icons';
import { useAmenityBulletContent } from './content';

export interface AmenityBulletTemplateProps {
  amenityType?: 'smoke' | 'tv' | 'kitchen' | 'heating' | 'entrance' | 'carbon';
  removed?: boolean;
}

/**
 * Renders the amenity bullet
 * @param {string} amenityType - Type of amenity
 * @param {boolean} removed - Strikes through if removed
 */
export const AmenityBulletTemplate: React.FC<AmenityBulletTemplateProps> = ({
  amenityType,
  removed,
}) => {
  const { icon, description } = useAmenityBulletContent({ amenityType });

  return (
    <div className="flex items-center p-3 w-1/2">
      <Icon {...icon} width={24} />
      {removed ? (
        <s className="ml-4 font-thin">{description}</s>
      ) : (
        <p className="ml-4 font-thin">{description}</p>
      )}
    </div>
  );
};
