import { StrokeIconTemplate, StrokeIconTemplateProps } from "./template";

export type StrokeIconVariants =
  | "close"
  | "minus"
  | "chevronBottom"
  | "chevronLeft"
  | "chevronTop"
  | "chevronRight"
  | "exclamation"
  | "menubarLogo"
  | "check";

export type StrokeIconProps = StrokeIconTemplateProps & {
  strokeType: StrokeIconVariants;
};

export const StrokeIcon = (props: StrokeIconProps) => (
  <StrokeIconTemplate {...props} />
);
