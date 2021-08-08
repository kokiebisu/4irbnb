import { WideSegmentTemplate } from "./template";
import { useWideSegment } from "./logic";

export const WideSegment = () => {
  const data = useWideSegment();
  return <WideSegmentTemplate {...data} />;
};
