import { useKnowSegment } from './logic';
import { KnowSegmentTemplate, KnowSegmentTemplateProps } from './template';

export interface KnowSegmentProps extends KnowSegmentTemplateProps {}

export const KnowSegment: React.FC<KnowSegmentProps> = () => {
  const data = useKnowSegment();
  return <KnowSegmentTemplate {...data} />;
};

export const know = (props: KnowSegmentProps) => {
  return {
    know: {
      component: <KnowSegment {...props} />,
    },
  };
};
