import { factory } from "./utils/factory";

export type IndexSegmentProps =
  | { variant: "category" }
  | { variant: "nearby" }
  | { variant: "banner" }
  | { variant: "discover" }
  | { variant: "anywhere" }
  | { variant: "destinations" }
  | { variant: "wide" };

/**
 * Bundles the button components
 */
export const Segment = ({ ...props }: IndexSegmentProps) => factory(props);
