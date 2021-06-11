import { Icon } from '@atoms';
import { useAmenityBulletTemplate } from './use-template';

export type AmenityBulletTypeVariants =
  | 'smoke'
  | 'tv'
  | 'kitchen'
  | 'heating'
  | 'entrance'
  | 'carbon';
export type AmenityBulletTemplateProps = {
  amenityType: AmenityBulletTypeVariants;
  removed: boolean;
};

/**
 * Renders the amenity bullet
 * @param {string} amenityType - Type of amenity
 * @param {boolean} removed - Strikes through if removed
 */
export const AmenityBulletTemplate = ({
  amenityType,
  removed,
}: AmenityBulletTemplateProps): JSX.Element => {
  const { icon, description } = useAmenityBulletTemplate({ amenityType });

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
