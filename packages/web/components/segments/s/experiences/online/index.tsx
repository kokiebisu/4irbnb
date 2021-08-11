import { factory } from "./utils/factory";

// export type OnlineExperienceSegmentVariants =

export type SegmentProps =
  | { variant: "banner" }
  | { variant: "cards" }
  | { variant: "starting" }
  | { variant: "collections" };

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment: React.FC<SegmentProps> = ({ ...props }) => factory(props);
