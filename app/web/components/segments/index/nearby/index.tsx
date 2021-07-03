import { useNearbySegment } from './logic';
import { NearbySegmentTemplate } from './template';

export const NearbySegment = () => {
  const data = useNearbySegment();
  return <NearbySegmentTemplate {...data} />;
};

export const nearby = (props) => {
  return {
    nearby: {
      component: <NearbySegment {...props} />,
    },
  };
};
