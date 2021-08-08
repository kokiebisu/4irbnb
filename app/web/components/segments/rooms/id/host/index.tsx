import { useHostSegment } from "./logic";
import { HostSegmentTemplate } from "./template";

export const HostSegment = () => {
  const data = useHostSegment();
  return <HostSegmentTemplate {...data} />;
};
