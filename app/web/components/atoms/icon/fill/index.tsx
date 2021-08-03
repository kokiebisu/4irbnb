import { FillIconTemplate, FillIconTemplateProps } from "./template";

export type FillIconVariants =
  | "house"
  | "sparkle"
  | "door"
  | "pause"
  | "play"
  | "heart"
  | "upload"
  | "calendar"
  | "guidelines"
  | "doublebed"
  | "distancing"
  | "check";

export type FillIconProps = FillIconTemplateProps & {
  fillType: FillIconVariants;
};

export const FillIcon = (props: FillIconProps) => (
  <FillIconTemplate {...props} />
);
