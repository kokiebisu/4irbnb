import { useKnowSegment } from './logic';
import { KnowSegmentTemplate } from './template';

export const KnowSegment = () => {
  const data = useKnowSegment();
  return <KnowSegmentTemplate {...data} />;
};

export const know = (props) => {
  return {
    know: {
      component: <KnowSegment {...props} />,
    },
  };
};
