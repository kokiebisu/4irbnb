import { factory } from "./utils/factory";

export type OnlineHostSegmentProps =
  | { variant: "back" }
  | { variant: "banner" }
  | { variant: "faq" }
  | { variant: "more" }
  | { variant: "sharing" };

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment = (props: OnlineHostSegmentProps): JSX.Element =>
  factory(props);
