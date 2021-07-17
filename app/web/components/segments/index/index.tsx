import { factory } from "./utils/factory";
import { WideSegmentProps } from "./wide";

export type IndexSegmentProps =
  | { variant: "category" }
  | { variant: "nearby" }
  | { variant: "banner" }
  | { variant: "online" }
  | { variant: "anywhere" }
  | { variant: "destinations" }
  | ({ variant: "wide" } & WideSegmentProps);

/**
 * Bundles the button components
 */
export const Segment = ({ ...props }: IndexSegmentProps) => factory(props);
