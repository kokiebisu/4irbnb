import { PrioritySegmentProps } from "./priority";
import { factory } from "./utils/factory";

export type HomesSegmentProps =
  | { variant: "all" }
  | { variant: "help" }
  | { variant: "banner" }
  | { variant: "community" }
  | { variant: "hosting" }
  | ({ variant: "priority" } & PrioritySegmentProps)
  | { variant: "ready" };

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment = ({ ...props }: HomesSegmentProps): JSX.Element =>
  factory(props);
