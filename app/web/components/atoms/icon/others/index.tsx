import { OthersIconTemplate } from "./template";

export type OthersIconVariants =
  | "clock"
  | "checkin"
  | "children"
  | "smoking"
  | "pets"
  | "parties"
  | "cleaning"
  | "caution";

export type OthersIconProps = {
  othersType: OthersIconVariants;
};

export const OthersIcon = () => <OthersIconTemplate />;
