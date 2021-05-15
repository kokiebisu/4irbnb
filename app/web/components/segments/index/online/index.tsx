import { useOnlineSegment } from './logic';
import { OnlineSegmentTemplate } from './template';

export const OnlineSegment = () => {
  const data = useOnlineSegment();
  return <OnlineSegmentTemplate {...data} />;
};

export const online = (props) => {
  return {
    online: {
      component: <OnlineSegment {...props} />,
    },
  };
};
