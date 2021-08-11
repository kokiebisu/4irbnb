import { useCommunitySegment } from "./logic";
import { CommunitySegmentTemplate } from "./template";

export const CommunitySegment = () => {
  const data = useCommunitySegment();
  return <CommunitySegmentTemplate {...data} />;
};
