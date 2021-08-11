import { useDescriptionSegment } from "./logic";
import { DescriptionSegmentTemplate } from "./template";

export const DescriptionSegment = () => {
  const data = useDescriptionSegment();
  return <DescriptionSegmentTemplate {...data} />;
};
