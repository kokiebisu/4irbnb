import Router from "next/router";

import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";

import { CategoryCard } from "./card.category";
import { HorizontalCard } from "./card.horizontal";
import { VerticalCard } from "./card.vertical";
import { TypeStayCard } from "./card.typestay";
import { ArrangementsCard } from "./card.arrangements";
import { CheckInCard } from "./card.checkin";
import { ReviewCard } from "./card.review";
import { StayCard } from "./card.stay";
import { NearbyCard } from "./card.nearby";
import { OnlineCard } from "./card.online";
import { ParticipateCard } from "./card.participate";
import { AvailableCard } from "./card.available";
import { HostCard } from "./card.host";
import { SetCard } from "./card.set";
import { AgainCard } from "./card.again";
import { WorksCard } from "./card.works";
import { SharingCard } from "./card.sharing";
import { HowCard } from "./card.how";
import { AnywhereCard } from "./card.anywhere";
import { HostingCard } from "./card.hosting";
import { VideoCard } from "./card.video";
import { StartingCard } from "./card.starting";
import { CollectionCard } from "./card.collection";

export const $Card = {
  CATEGORY: "category",
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
  TYPESTAY: "typestay",
  ARRANGEMENTS: "arrangements",
  CHECKIN: "checkin",
  REVIEW: "review",
  STAY: "stay",
  NEARBY: "nearby",
  ONLINE: "online",
  PARTICIPATE: "participate",
  AVAILABLE: "available",
  HOST: "host",
  SET: "set",
  AGAIN: "again",
  WORKS: "works",
  SHARING: "sharing",
  HOW: "how",
  ANYWHERE: "anywhere",
  HOSTING: "hosting",
  VIDEO: "video",
  STARTING: "starting",
  COLLECTION: "collection",
};

export interface CardProps {
  extendsTo?: string;
  variant?: string;
  to?: string;
  [property: string]: any;
}

/**
 * Bundles the card components
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} variant - Specifies the variant of card component
 * @param {string} to - Redirects to the path when clicked
 */
export const Card: React.FC<CardProps> = ({
  extendsTo,
  variant,
  to,
  ...props
}) => {
  const variants: {
    [variant: string]: JSX.Element;
  } = {
    category: <CategoryCard {...props} />,
    horizontal: <HorizontalCard {...props} />,
    vertical: <VerticalCard {...props} />,
    typestay: <TypeStayCard {...props} />,
    arrangements: <ArrangementsCard {...props} />,
    checkin: <CheckInCard {...props} />,
    review: <ReviewCard {...props} />,
    stay: <StayCard {...props} />,
    nearby: <NearbyCard {...props} />,
    online: <OnlineCard {...props} />,
    participate: <ParticipateCard {...props} />,
    available: <AvailableCard {...props} />,
    host: <HostCard {...props} />,
    set: <SetCard {...props} />,
    again: <AgainCard {...props} />,
    works: <WorksCard {...props} />,
    sharing: <SharingCard {...props} />,
    how: <HowCard {...props} />,
    anywhere: <AnywhereCard {...props} />,
    hosting: <HostingCard {...props} />,
    video: <VideoCard {...props} />,
    starting: <StartingCard {...props} />,
    collection: <CollectionCard {...props} />,
  };

  if (to) {
    return (
      <div
        style={{ cursor: "pointer" }}
        className={`${[
          font["text--left"],
          layout["block"],
          shape["h--full"],
          shape["w--full"],
        ].join(" ")} ${extendsTo}`}
        data-testid={`${variant}-card--molecule`}
        onClick={() => Router.push(to)}
      >
        {variants[variant]}
      </div>
    );
  }

  return (
    <div data-testid={`${variant}-card`} className={extendsTo}>
      {variants[variant]}
    </div>
  );
};
