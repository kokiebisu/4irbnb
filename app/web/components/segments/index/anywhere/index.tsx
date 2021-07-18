import { useAnywhereSegment } from "./logic";
import { AnywhereSegmentTemplate } from "./template";

export const AnywhereSegment = () => {
  const data = useAnywhereSegment();
  return <AnywhereSegmentTemplate {...data} />;
};
