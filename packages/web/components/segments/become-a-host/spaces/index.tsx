import { useSpacesSegment } from './logic';
import { SpacesSegmentTemplate } from './template';

export const SpacesSegment = () => {
  const data = useSpacesSegment();
  return <SpacesSegmentTemplate {...data} />;
};
