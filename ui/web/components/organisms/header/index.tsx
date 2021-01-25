import { DetailsHeader } from "@header/header.details";
import { ExperiencesHeader } from "@header/header.experiences";
import { HomesHeader } from "@header/header.homes";
import { OnlineHostHeader } from "@header/header.onlinehost";
import { StayHeader } from "@header/header.stay";
import { LandingHeader } from "@header/header.landing";
import { WhiteHeader } from "@header/header.white";

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
