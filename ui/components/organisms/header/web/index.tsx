/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { DetailsHeader } from "./header.details";
import { ExperiencesHeader } from "./header.experiences";
import { HomesHeader } from "./header.homes";
import { OnlineHostHeader } from "./header.onlinehost";
import { StayHeader } from "./header.stay";
import { LandingHeader } from "./header.landing";
import { WhiteHeader } from "./header.white";

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
    landing: <LandingHeader {...props} />,
    white: <WhiteHeader {...props} />,
    details: <DetailsHeader {...props} />,
    homes: <HomesHeader {...props} />,
    experiences: <ExperiencesHeader {...props} />,
    onlinehost: <OnlineHostHeader {...props} />,
    stay: <StayHeader {...props} />,
  };
  return (
    <div className={extendsTo} data-testid={`${variant}-header`}>
      {variants[variant]}
    </div>
  );
};
