import { StrokeIconTemplate, StrokeIconTemplateProps } from "./template";

export type StrokeIconVariants = "close";

export type StrokeIconProps = StrokeIconTemplateProps & {
  strokeType: "close";
};

export const StrokeIcon = (props: StrokeIconProps) => (
  <StrokeIconTemplate {...props} />
);
