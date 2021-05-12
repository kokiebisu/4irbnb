import { WorthSegmentTemplate } from './template';
import { useWorthSegment } from './logic';

export const WorthSegment = () => {
  const data = useWorthSegment();
  return <WorthSegmentTemplate {...data} />;
};

export const worth = (props) => {
  return {
    worth: {
      component: <WorthSegment {...props} />,
    },
  };
};
