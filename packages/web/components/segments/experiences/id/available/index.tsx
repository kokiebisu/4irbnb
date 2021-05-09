import { useAvailableSegment } from './logic';
import {
  AvailableSegmentTemplate,
  AvailableSegmentTemplateProps,
} from './template';

export interface AvailableSegmentProps extends AvailableSegmentTemplateProps {}

export const AvailableSegment: React.FC<AvailableSegmentProps> = () => {
  const data = useAvailableSegment();
  return <AvailableSegmentTemplate {...data} />;
};

export const available = (props: AvailableSegmentProps) => {
  return {
    available: {
      component: <AvailableSegment {...props} />,
    },
  };
};
