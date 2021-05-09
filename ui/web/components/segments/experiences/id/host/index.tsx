import { HostSegmentTemplateProps } from '@template/rooms/id/host/template';
import { useHostSegment } from './logic';
import { HostSegmentTemplate } from './template';

export interface HostSegmentProps extends HostSegmentTemplateProps {}

export const HostSegment: React.FC<HostSegmentProps> = (props) => {
  const data = useHostSegment();
  return <HostSegmentTemplate {...data} {...props} />;
};

export const host = (props: HostSegmentProps) => {
  return {
    host: {
      component: <HostSegment {...props} />,
    },
  };
};
