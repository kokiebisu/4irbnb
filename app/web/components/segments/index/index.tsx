import { factory } from "./utils/factory";

export type IndexSegmentProps =
  | { variant: "category" }
  | { variant: "nearby" }
  | { variant: "banner" }
  | { variant: "online" }
  | { variant: "anywhere" }
  | { variant: "destinations" }
  | { variant: "worth" };

/**
 * Bundles the button components
 */
export const Segment = ({ ...props }: IndexSegmentProps) => factory(props);
