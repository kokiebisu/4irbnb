import { usePreviewSegment } from "./logic";
import { PreviewSegmentTemplate } from "./template";

export const PreviewSegment = () => {
  const data = usePreviewSegment();
  return <PreviewSegmentTemplate {...data} />;
};
