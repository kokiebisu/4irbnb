import { factory } from "./utils/factory";

export type SegmentProps =
  | {
      variant: "amenities";
    }
  | { variant: "arrangements" }
  | { variant: "description" }
  | { variant: "host" }
  | { variant: "other" }
  | { variant: "preview" }
  | { variant: "reviews" };

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment = ({ ...props }: SegmentProps) => factory(props);
