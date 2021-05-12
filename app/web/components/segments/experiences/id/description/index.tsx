import { useDescriptionSegment } from './logic';
import {
  DescriptionSegmentTemplate,
  DescriptionSegmentTemplateProps,
} from './template';

export interface DescriptionSegmentProps
  extends DescriptionSegmentTemplateProps {}

export const DescriptionSegment: React.FC<DescriptionSegmentProps> = () => {
  const data = useDescriptionSegment();
  return <DescriptionSegmentTemplate {...data} />;
};

export const description = (props: DescriptionSegmentProps) => {
  return {
    description: {
      component: <DescriptionSegment {...props} />,
    },
  };
};
