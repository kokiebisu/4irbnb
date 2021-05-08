import { useBringSegment } from './logic';
import { BringSegmentTemplate } from './template';

export const BringSegment = (props) => {
  const data = useBringSegment();
  return <BringSegmentTemplate {...data} {...props} />;
};

export const bring = (props) => {
  return {
    bring: {
      component: <BringSegment {...props} />,
    },
  };
};
