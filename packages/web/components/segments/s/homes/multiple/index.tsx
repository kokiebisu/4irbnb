import { useMultipleSegment } from './logic';
import { MultipleSegmentTemplate } from './template';

export const MultipleSegment = () => {
  const data = useMultipleSegment();
  return <MultipleSegmentTemplate {...data} />;
};
