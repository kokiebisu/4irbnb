import { useParticipateSegment } from './logic';
import {
  ParticipateSegmentTemplate,
  ParticipateSegmentTemplateProps,
} from './template';

export interface ParticipateSegmentProps
  extends ParticipateSegmentTemplateProps {}

export const ParticipateSegment: React.FC<ParticipateSegmentProps> = (
  props
) => {
  const data = useParticipateSegment();
  return <ParticipateSegmentTemplate {...data} />;
};

export const participate = (props: ParticipateSegmentProps) => {
  return {
    participate: {
      component: <ParticipateSegment {...props} />,
    },
  };
};
