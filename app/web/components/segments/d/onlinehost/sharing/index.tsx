import { useSharing } from "./logic";
import {
  SharingSegmentTemplate,
  SharingSegmentTemplateProps,
} from "./template";

export type SharingSegmentProps = SharingSegmentTemplateProps;

export const SharingSegment = () => {
  const data = useSharing();
  return <SharingSegmentTemplate {...data} />;
};
