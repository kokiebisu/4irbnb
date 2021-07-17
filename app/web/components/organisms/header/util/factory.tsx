import { HeaderProps } from "@header";
import { DetailsHeader } from "@header/header-details";
import { ExperiencesHeader } from "@header/header-experiences";
import { HomesHeader } from "@header/header-homes";
import { LandingHeader } from "@header/header-landing";
import { OnlineHostHeader } from "@header/header-onlinehost";
import { StayHeader } from "@header/header-stay";
import { WhiteHeader } from "@header/header-white";

export const factory = (props: HeaderProps) => {
  switch (props.variant) {
    case "details":
      return <DetailsHeader {...props} />;
    case "experiences":
      return <ExperiencesHeader />;
    case "homes":
      return <HomesHeader {...props} />;
    case "landing":
      return <LandingHeader {...props} />;
    case "onlinehost":
      return <OnlineHostHeader />;
    case "stay":
      return <StayHeader {...props} />;
    case "white":
      return <WhiteHeader {...props} />;
    default:
      throw new Error("[Header] Invalid variant provided");
  }
};
