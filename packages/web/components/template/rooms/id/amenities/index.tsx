import { useAmenities } from './logic';
import { AmenitiesTemplate } from './template';

export const Amenities = () => {
  const data = useAmenities();
  return <AmenitiesTemplate {...data} />;
};
