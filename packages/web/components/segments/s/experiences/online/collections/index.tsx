import { useCollectionsSegment } from "./logic";
import { CollectionsSegmentTemplate } from "./template";

export const CollectionsSegment = () => {
  const data = useCollectionsSegment();
  return <CollectionsSegmentTemplate {...data} />;
};
