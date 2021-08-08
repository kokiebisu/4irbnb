import { useArrangementsSegment } from "./logic";
import { ArrangementsSegmentTemplate } from "./template";

export const ArrangementsSegment = () => {
  const data = useArrangementsSegment();
  return <ArrangementsSegmentTemplate {...data} />;
};
