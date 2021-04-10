import { useScenariosSegment } from './logic';
import { ScenariosSegmentTemplate } from './template';

export const ScenariosSegment = () => {
  const data = useScenariosSegment();
  return <ScenariosSegmentTemplate {...data} />;
};
