import { useAvailableSegment } from './logic';
import { AvailableSegmentTemplate } from './template';

export const AvailableSegment = () => {
  const data = useAvailableSegment();
  return <AvailableSegmentTemplate {...data} />;
};

export const available = (props) => {
  return {
    available: {
      component: <AvailableSegment {...props} />,
    },
  };
};
