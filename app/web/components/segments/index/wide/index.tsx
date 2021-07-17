import { WideSegmentTemplate, WideSegmentTemplateProps } from "./template";
import { useWideSegment } from "./logic";

export type WideSegmentProps = WideSegmentTemplateProps;

export const WideSegment = (props: WideSegmentProps) => {
  const data = useWideSegment();
  return <WideSegmentTemplate {...data} {...props} />;
};
