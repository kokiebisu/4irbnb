import { useAmenitiesSegment } from "./logic";
import { AmenitiesSegmentTemplate } from "./template";

export const AmenitiesSegment = () => {
  const data = useAmenitiesSegment();
  return <AmenitiesSegmentTemplate {...data} />;
};
