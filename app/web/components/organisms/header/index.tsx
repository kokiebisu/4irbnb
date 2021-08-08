import { DetailsHeaderProps } from "./header-details";
import { HomesHeaderProps } from "./header-homes";
import { StayHeaderProps } from "./header-stay";
import { WhiteHeaderProps } from "./header-white";
import { factory } from "./util/factory";

export type HeaderProps =
  | ({ variant: "details" } & DetailsHeaderProps)
  | { variant: "experiences" }
  | ({ variant: "homes" } & HomesHeaderProps)
  | { variant: "landing" }
  | { variant: "onlinehost" }
  | ({ variant: "stay" } & StayHeaderProps)
  | ({ variant: "white" } & WhiteHeaderProps);

/**
 * Bundles the header components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} variant - Specifies the type of header component
 */
export const Header = ({ ...props }: HeaderProps): JSX.Element =>
  factory(props);
