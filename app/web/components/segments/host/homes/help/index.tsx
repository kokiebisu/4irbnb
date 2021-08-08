import { useHelpSegment } from "./logic";
import { HelpSegmentTemplate } from "./template";

export const HelpSegment = () => {
  const data = useHelpSegment();
  return <HelpSegmentTemplate {...data} />;
};
