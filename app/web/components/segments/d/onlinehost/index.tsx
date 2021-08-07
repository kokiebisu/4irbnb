import { BackSegmentProps } from "./back";
import { BannerSegmentProps } from "./banner";
import { FAQSegmentProps } from "./faq";
import { MoreSegmentProps } from "./more";
import { SharingSegmentProps } from "./sharing";
import { factory } from "./utils/factory";

export type OnlineHostSegmentProps =
  | ({ variant: "back" } & BackSegmentProps)
  | ({ variant: "banner" } & BannerSegmentProps)
  | ({ variant: "faq" } & FAQSegmentProps)
  | ({ variant: "more" } & MoreSegmentProps)
  | ({ variant: "sharing" } & SharingSegmentProps);

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment = (props: OnlineHostSegmentProps): JSX.Element =>
  factory(props);
