import { usePrioritySegment } from "./logo";
import { PrioritySegmentTemplate } from "./template";

export const PrioritySegment = () => {
  const data = usePrioritySegment();
  return <PrioritySegmentTemplate {...data} />;
};
