import { DetailsHeaderProps } from "./header-details";
import { ExperiencesHeaderProps } from "./header-experiences";
import { HomesHeaderProps } from "./header-homes";
import { LandingHeaderProps } from "./header-landing";
import { OnlineHostHeaderProps } from "./header-onlinehost";
import { StayHeaderProps } from "./header-stay";
import { WhiteHeaderProps } from "./header-white";
import { factory } from "./util/factory";

export type HeaderProps =
  | ({ variant: "details" } & DetailsHeaderProps)
  | ({ variant: "experiences" } & ExperiencesHeaderProps)
  | ({ variant: "homes" } & HomesHeaderProps)
  | ({ variant: "landing" } & LandingHeaderProps)
  | ({ variant: "onlinehost" } & OnlineHostHeaderProps)
  | ({ variant: "stay" } & StayHeaderProps)
  | ({ variant: "white" } & WhiteHeaderProps);

/**
 * Bundles the header components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} variant - Specifies the type of header component
 */
export const Header = ({ ...props }: HeaderProps): JSX.Element =>
  factory(props);
