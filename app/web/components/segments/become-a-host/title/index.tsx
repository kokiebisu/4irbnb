import { useTitleSegment } from './logic';
import { TitleSegmentTemplate } from './template';

export const TitleSegment = () => {
  const data = useTitleSegment();
  return <TitleSegmentTemplate {...data} />;
};
