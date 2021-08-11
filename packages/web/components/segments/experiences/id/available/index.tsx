import { useAvailableSegment } from "./logic";
import { AvailableSegmentTemplate } from "./template";

export const AvailableSegment = () => {
  const data = useAvailableSegment();
  return <AvailableSegmentTemplate {...data} />;
};
