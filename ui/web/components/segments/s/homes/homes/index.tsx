import { useHomesSegment } from './logic';
import { HomesSegmentTemplate } from './template';

export const HomesSegment = () => {
  const data = useHomesSegment();
  return <HomesSegmentTemplate {...data} />;
};

export const homes = (props) => {
  return {
    homes: {
      component: <HomesSegment {...props} />,
    },
  };
};
