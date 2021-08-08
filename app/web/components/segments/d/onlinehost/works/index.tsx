import { useWorksSegment } from "./logic";
import { WorksSegmentTemplate } from "./template";

export const WorksSegment = () => {
  const data = useWorksSegment();
  return <WorksSegmentTemplate {...data} />;
};
