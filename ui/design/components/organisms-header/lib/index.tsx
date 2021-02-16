/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { DetailsHeader } from "./web/header.details";
import { ExperiencesHeader } from "./web/header.experiences";
import { HomesHeader } from "./web/header.homes";
import { OnlineHostHeader } from "./web/header.onlinehost";
import { StayHeader } from "./web/header.stay";
import { LandingHeader } from "./web/header.landing";
import { WhiteHeader } from "./web/header.white";

export const $Header = {
  LANDING: "landing",
  WHITE: "white",
  DETAILS: "details",
  HOMES: "homes",
  EXPERIENCES: "experiences",
  ONLINEHOST: "onlinehost",
  STAY: "stay",
};

export interface HeaderProps {
  extendsTo?: any;
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the header components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} variant - Specifies the type of header component
 */
export const Header: React.FC<HeaderProps> = ({
  variant,
  extendsTo,
  ...props
}) => {
  const variants: {
    [variant: string]: any;
  } = {
    [$Header.LANDING]: <LandingHeader {...props} />,
    [$Header.WHITE]: <WhiteHeader {...props} />,
    [$Header.DETAILS]: <DetailsHeader {...props} />,
    [$Header.HOMES]: <HomesHeader {...props} />,
    [$Header.EXPERIENCES]: <ExperiencesHeader {...props} />,
    [$Header.ONLINEHOST]: <OnlineHostHeader {...props} />,
    [$Header.STAY]: <StayHeader {...props} />,
  };
  return (
    <div className={extendsTo} data-testid={`${variant}-header`}>
      {variants[variant]}
    </div>
  );
};
