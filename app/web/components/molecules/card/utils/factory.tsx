import { CardProps } from "@card";
import { AgainCard } from "@card/card-again";
import { AnywhereCard } from "@card/card-anywhere";
import { ArrangementsCard } from "@card/card-arrangements";
import { AvailableCard } from "@card/card-available";
import { CategoryCard } from "@card/card-category";
import { CheckInCard } from "@card/card-checkin";
import { CollectionCard } from "@card/card-collection";
import { HorizontalCard } from "@card/card-horizontal";
import { HostCard } from "@card/card-host";
import { HostingCard } from "@card/card-hosting";
import { HowCard } from "@card/card-how";
import { NearbyCard } from "@card/card-nearby";
import { OnlineCard } from "@card/card-online";
import { ParticipateCard } from "@card/card-participate";
import { ReviewCard } from "@card/card-review";
import { SetCard } from "@card/card-set";
import { SharingCard } from "@card/card-sharing";
import { StartingCard } from "@card/card-starting";
import { StayCard } from "@card/card-stay";
import { TypeStayCard } from "@card/card-typestay";
import { VerticalCard } from "@card/card-vertical";
import { VideoCard } from "@card/card-video";
import { WorksCard } from "@card/card-works";

export const factory = (props: CardProps) => {
  switch (props.variant) {
    case "again":
      return <AgainCard />;
    case "anywhere":
      return <AnywhereCard {...props} />;
    case "arrangements":
      return <ArrangementsCard {...props} />;
    case "available":
      return <AvailableCard {...props} />;
    case "category":
      return <CategoryCard {...props} />;
    case "checkin":
      return <CheckInCard {...props} />;
    case "collection":
      return <CollectionCard {...props} />;
    case "horizontal":
      return <HorizontalCard {...props} />;
    case "host":
      return <HostCard {...props} />;
    case "hosting":
      return <HostingCard {...props} />;
    case "how":
      return <HowCard {...props} />;
    case "nearby":
      return <NearbyCard {...props} />;
    case "online":
      return <OnlineCard {...props} />;
    case "participate":
      return <ParticipateCard {...props} />;
    case "review":
      return <ReviewCard {...props} />;
    case "set":
      return <SetCard {...props} />;
    case "sharing":
      return <SharingCard {...props} />;
    case "starting":
      return <StartingCard {...props} />;
    case "stay":
      return <StayCard {...props} />;
    case "typestay":
      return <TypeStayCard {...props} />;
    case "vertical":
      return <VerticalCard {...props} />;
    case "video":
      return <VideoCard {...props} />;
    case "works":
      return <WorksCard {...props} />;
    default:
      throw new Error(`[Card] Invalid variant`);
  }
};
