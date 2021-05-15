import { useAlsoSegment } from './logic';
import { AlsoSegmentTemplate } from './template';

export const AlsoSegment = () => {
  const data = useAlsoSegment();
  return <AlsoSegmentTemplate {...data} />;
};

export const also = (props) => {
  return {
    also: {
      component: <AlsoSegment {...props} />,
    },
  };
};
