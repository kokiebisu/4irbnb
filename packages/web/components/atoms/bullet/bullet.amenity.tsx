import {
  CarbonMonoxideAlarm,
  Kitchen,
  PrivateEntrance,
  SmokeAlarm,
  Heating,
  TV,
} from '@svg/original';

/**
 * Renders the amenity bullet
 * @param {string} amenityType - Type of amenity
 * @param {boolean} removed - Strikes through if removed
 */
const AmenityBullet: React.FC<{
  amenityType?: string;
  title?: string;
  removed?: boolean;
}> = ({ amenityType = 'kitchen', removed = false }) => {
  const amenityTypes = {
    smoke: { icon: <SmokeAlarm width={24} />, description: 'Smoke alarm' },
    tv: { icon: <TV width={24} />, description: 'TV' },
    kitchen: { icon: <Kitchen width={24} />, description: 'Kitchen' },
    heating: { icon: <Heating width={24} />, description: 'Heating' },
    entrance: {
      icon: <PrivateEntrance width={24} />,
      description: 'Private entrance',
    },
    carbon: {
      icon: <CarbonMonoxideAlarm width={24} />,
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
