import { useHostSegment } from './logic';
import { HostSegmentTemplate } from './template';

export const HostSegment = (props) => {
  const data = useHostSegment();
  return <HostSegmentTemplate {...data} {...props} />;
};

export const host = (props) => {
  return {
    host: {
      component: <HostSegment {...props} />,
    },
  };
};
