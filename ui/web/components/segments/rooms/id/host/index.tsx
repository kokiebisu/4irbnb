import { useHostSegment } from './logic';
import { HostSegmentTemplate } from './template';

export const HostSegment = () => {
  const data = useHostSegment();
  return <HostSegmentTemplate {...data} />;
};

export const host = (props) => {
  return {
    host: {
      component: <HostSegment {...props} />,
    },
  };
};
