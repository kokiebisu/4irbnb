import {
  PrioritySegmentTemplate,
  PrioritySegmentTemplateProps,
} from "./template";

export type PrioritySegmentProps = PrioritySegmentTemplateProps;

export const PrioritySegment = (props: PrioritySegmentProps) => (
  <PrioritySegmentTemplate {...props} />
);
