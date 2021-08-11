import { useAnywhereSegment } from "./logic";
import { AnywhereSegmentTemplate } from "./template";

export const AnywhereSegment = (): JSX.Element => {
  const data = useAnywhereSegment();
  return <AnywhereSegmentTemplate {...data} />;
};
