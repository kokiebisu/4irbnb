import { useAllSegment } from "./logic";
import { AllSegmentTemplate } from "./template";

export const AllSegment = () => {
  const data = useAllSegment();
  return <AllSegmentTemplate {...data} />;
};
