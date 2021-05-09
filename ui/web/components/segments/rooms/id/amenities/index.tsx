import { useAmenitiesSegment } from './logic';
import { AmenitiesSegmentTemplate } from './template';

export const AmenitiesSegment = () => {
  const data = useAmenitiesSegment();
  return <AmenitiesSegmentTemplate {...data} />;
};

export const amenities = (props) => {
  return {
    amenities: {
      component: <AmenitiesSegment {...props} />,
    },
  };
};
