import { useParticipateSegment } from './logic';
import { ParticipateSegmentTemplate } from './template';

export const ParticipateSegment = () => {
  const data = useParticipateSegment();
  return <ParticipateSegmentTemplate {...data} />;
};

export const participate = (props) => {
  return {
    participate: {
      component: <ParticipateSegment {...props} />,
    },
  };
};
