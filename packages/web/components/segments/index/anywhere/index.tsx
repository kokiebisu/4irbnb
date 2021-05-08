import { useAnywhereSegment } from './logic';
import { AnywhereSegmentTemplate } from './template';

export const AnywhereSegment = (props) => {
  const data = useAnywhereSegment();
  return <AnywhereSegmentTemplate {...data} />;
};

export const anywhere = (props) => {
  return {
    anywhere: {
      component: <AnywhereSegment {...props} />,
    },
  };
};
