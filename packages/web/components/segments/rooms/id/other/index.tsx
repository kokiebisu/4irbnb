import { useOtherSegment } from './logic';
import { OtherSegmentTemplate } from './template';

export const OtherSegment = () => {
  const data = useOtherSegment();
  return <OtherSegmentTemplate {...data} />;
};

export const other = (props) => {
  return {
    other: {
      component: <OtherSegment {...props} />,
    },
  };
};
