import { KnowSegmentTemplate } from './template';
import { useKnowSegment } from './logic';

export const KnowSegment = () => {
  const data = useKnowSegment();
  return <KnowSegmentTemplate {...data} />;
};

export const know = (props) => {
  return {
    know: {
      component: <KnowSegment {...props} />
    }
  }
}