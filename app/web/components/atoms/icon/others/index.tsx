import { OthersIconTemplate } from "./template";

export type OthersIconVariants =
  | "clock"
  | "checkin"
  | "children"
  | "smoking"
  | "pets"
  | "parties"
  | "cleaning"
  | "caution"
  | "home"
  | "global"
  | "lightening"
  | "protected"
  | "phone";

export type OthersIconProps = {
  othersType: OthersIconVariants;
};

export const OthersIcon = (props: OthersIconProps) => (
  <OthersIconTemplate {...props} />
);
