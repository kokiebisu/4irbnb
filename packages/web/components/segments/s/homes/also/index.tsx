import { useAlsoSegment } from "./logic";
import { AlsoSegmentTemplate } from "./template";

export const AlsoSegment = () => {
  const data = useAlsoSegment();
  return <AlsoSegmentTemplate {...data} />;
};
