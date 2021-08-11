import { factory } from "./utils/factory";

export type SegmentProps =
  | { variant: "available" }
  | { variant: "bring" }
  | { variant: "characteristics" }
  | { variant: "description" }
  | { variant: "experiences" }
  | { variant: "host" }
  | { variant: "know" }
  | { variant: "participate" }
  | { variant: "preview" }
  | { variant: "reviews" };

/**
 * Bundles the button components
 * @param {string} variant - Specifies the type of button component
 */
export const Segment = (props: SegmentProps) => factory(props);
