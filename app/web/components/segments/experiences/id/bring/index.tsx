import { useBringSegment } from './logic';
import { BringSegmentTemplate, BringSegmentTemplateProps } from './template';

export interface BringSegmentProps extends BringSegmentTemplateProps {}

export const BringSegment: React.FC<BringSegmentProps> = (props) => {
  const data = useBringSegment();
  return <BringSegmentTemplate {...data} {...props} />;
};

export const bring = (props: BringSegmentProps) => {
  return {
    bring: {
      component: <BringSegment {...props} />,
    },
  };
};
