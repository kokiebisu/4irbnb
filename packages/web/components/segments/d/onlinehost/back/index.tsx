import { useBackSegment } from "./logic";
import { BackSegmentTemplate, BackSegmentTemplateProps } from "./template";

export type BackSegmentProps = BackSegmentTemplateProps;

export const BackSegment = () => {
  const data = useBackSegment();
  return <BackSegmentTemplate {...data} />;
};
