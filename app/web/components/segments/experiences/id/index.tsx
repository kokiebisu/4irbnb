import { AvailableSegmentProps } from "./available";
import { BringSegmentProps } from "./bring";
import { CharacteristicsSegmentProps } from "./characteristics";
import { DescriptionSegmentProps } from "./description";
import { ExperiencesSegmentProps } from "./experiences";
import { HostSegmentProps } from "./host";
import { PreviewSegmentProps } from "./preview";
import { ReviewsSegmentProps } from "./reviews";
import { factory } from "./utils/factory";

export type SegmentProps =
  | ({ variable: "available" } & AvailableSegmentProps)
  | ({ variant: "bring" } & BringSegmentProps)
  | ({ variant: "characteristics" } & CharacteristicsSegmentProps)
  | ({ variant: "description" } & DescriptionSegmentProps)
  | ({ variant: "experiences" } & ExperiencesSegmentProps)
  | ({ variant: "host" } & HostSegmentProps)
  | { variant: "know" }
  | { variant: "participate" }
  | ({ variant: "preview" } & PreviewSegmentProps)
  | ({ variant: "reviews" } & ReviewsSegmentProps);

/**
 * Bundles the button components
 * @param {string} variant - Specifies the type of button component
 */
export const Segment = (props: SegmentProps) => factory(props);
