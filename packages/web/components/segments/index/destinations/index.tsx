import { useDestinationsSegment } from './logic';
import { DestinationsSegmentTemplate } from './template';

export const DestinationsSegment = () => {
  const data = useDestinationsSegment();
  return <DestinationsSegmentTemplate {...data} />;
};

export const destinations = (props) => {
  return {
    destinations: {
      component: <DestinationsSegment {...props} />,
    },
  };
};
