import { Icon } from '@icons';
import { AmenityIconTypes } from 'components/icons/amenity';

export interface AmenityBulletTemplateProps {
  icon?: {
    variant: 'amenity';
    amenityType: AmenityIconTypes;
  };
  description?: string;
  removed?: boolean;
}

/**
 * Renders the amenity bullet
 * @param {string} amenityType - Type of amenity
 * @param {boolean} removed - Strikes through if removed
 */
export const AmenityBulletTemplate: React.FC<AmenityBulletTemplateProps> = ({
  icon,
  description,
  removed,
}) => {
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
