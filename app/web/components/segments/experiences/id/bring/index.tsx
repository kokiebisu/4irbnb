import { useBringSegment } from "./logic";
import { BringSegmentTemplate } from "./template";

export const BringSegment = () => {
  const data = useBringSegment();
  return <BringSegmentTemplate {...data} />;
};
