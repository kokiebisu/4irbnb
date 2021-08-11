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
  | "check"
  | "smokeAlarm"
  | "tv"
  | "kitchen"
  | "heating"
  | "privateEntrance"
  | "carbonMonoxide"
  | "people"
  | "language"
  | "computer"
  | "smile"
  | "activity"
  | "warning"
  | "plus"
  | "saved"
  | "avatar"
  | "star"
  | "superhost"
  | "verified"
  | "nameLogo"
  | "noNameLogo"
  | "lock"
  | "globe"
  | "share"
  | "email"
  | "flag"
  | "bars"
  | "explore"
  | "login"
  | "search"
  | "devices"
  | "devicesInverse"
  | "customerService"
  | "toolbox"
  | "analytics"
  | "education";

export type FillIconProps = FillIconTemplateProps & {
  fillType: FillIconVariants;
};

export const FillIcon = (props: FillIconProps) => (
  <FillIconTemplate {...props} />
);
