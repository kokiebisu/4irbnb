import { useCommunitySegment } from "./logic";
import { CommunitySegmentTemplate } from "./template";

export const CommunitySegmentSegment = () => {
  const data = useCommunitySegment();
  return <CommunitySegmentTemplate {...data} />;
};
