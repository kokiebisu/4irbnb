import { Icon } from '@icons';

export interface AmenityBulletProps {
  amenityType?: 'smoke' | 'tv' | 'kitchen' | 'heating' | 'entrance' | 'carbon';
  removed?: boolean;
}

/**
 * Renders the amenity bullet
 * @param {string} amenityType - Type of amenity
 * @param {boolean} removed - Strikes through if removed
 */
export const AmenityBullet: React.FC<AmenityBulletProps> = ({
  amenityType,
  removed,
}) => {
  const amenityTypes = {
    smoke: {
      icon: <Icon variant="amenity" amenityType="smokeAlarm" width={24} />,
      description: 'Smoke alarm',
    },
    tv: {
      icon: <Icon variant="amenity" amenityType="tv" width={24} />,
      description: 'TV',
    },
    kitchen: {
      icon: <Icon variant="amenity" amenityType="kitchen" width={24} />,
      description: 'Kitchen',
    },
    heating: {
      icon: <Icon variant="amenity" amenityType="heating" width={24} />,
      description: 'Heating',
    },
    entrance: {
      icon: <Icon variant="amenity" amenityType="privateEntrance" width={24} />,
      description: 'Private entrance',
    },
    carbon: {
      icon: <Icon variant="amenity" amenityType="carbonAlarm" width={24} />,
      description: 'Carbon monoxide alarm',
    },
  };
  return (
    <div className="flex items-center p-3 w-1/2">
      {amenityTypes[amenityType].icon}
      {removed ? (
        <s className="ml-4 font-thin">
          {amenityTypes[amenityType].description}
        </s>
      ) : (
        <p className="ml-4 font-thin">
          {amenityTypes[amenityType].description}
        </p>
      )}
    </div>
  );
};

export const amenity = (props) => {
  return {
    amenity: { component: <AmenityBullet {...props} /> },
  };
};
