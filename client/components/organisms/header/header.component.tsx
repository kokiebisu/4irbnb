import React from "react";

/** components */
import { DetailsHeader } from "./header.details";
import { ExperiencesHeader } from "./header.experiences";
import { HomesHeader } from "./header.homes";
import { OnlineHostHeader } from "./header.onlinehost";
import { StayHeader } from "./header.stay";
import { TransparentHeader } from "./header.transparent";
import { WhiteHeader } from "./header.white";

export interface HeaderProps {
  extendsTo?: string;
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
    [variant: string]: JSX.Element;
  } = {
    transparent: <TransparentHeader {...props} />,
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
