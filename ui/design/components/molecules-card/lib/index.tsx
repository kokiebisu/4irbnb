/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import Router from "next/router";

import { CategoryCard } from "./web/card.category";
import { HorizontalCard } from "./web/card.horizontal";
import { VerticalCard } from "./web/card.vertical";
import { TypeStayCard } from "./web/card.typestay";
import { ArrangementsCard } from "./web/card.arrangements";
import { CheckInCard } from "./web/card.checkin";
import { ReviewCard } from "./web/card.review";
import { StayCard } from "./web/card.stay";
import { NearbyCard } from "./web/card.nearby";
import { OnlineCard } from "./web/card.online";
import { ParticipateCard } from "./web/card.participate";
import { AvailableCard } from "./web/card.available";
import { HostCard } from "./web/card.host";
import { SetCard } from "./web/card.set";
import { AgainCard } from "./web/card.again";
import { WorksCard } from "./web/card.works";
import { SharingCard } from "./web/card.sharing";
import { HowCard } from "./web/card.how";
import { AnywhereCard } from "./web/card.anywhere";
import { HostingCard } from "./web/card.hosting";
import { VideoCard } from "./web/card.video";
import { StartingCard } from "./web/card.starting";
import { CollectionCard } from "./web/card.collection";

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
  extendsTo?: any;
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
  variant = $Card.CATEGORY,
  to,
  ...props
}) => {
  const variants: {
    [variant: string]: JSX.Element;
  } = {
    [$Card.CATEGORY]: <CategoryCard {...props} />,
    [$Card.HORIZONTAL]: <HorizontalCard {...props} />,
    [$Card.VERTICAL]: <VerticalCard {...props} />,
    [$Card.TYPESTAY]: <TypeStayCard {...props} />,
    [$Card.ARRANGEMENTS]: <ArrangementsCard {...props} />,
    [$Card.CHECKIN]: <CheckInCard {...props} />,
    [$Card.REVIEW]: <ReviewCard {...props} />,
    [$Card.STAY]: <StayCard {...props} />,
    [$Card.NEARBY]: <NearbyCard {...props} />,
    [$Card.ONLINE]: <OnlineCard {...props} />,
    [$Card.PARTICIPATE]: <ParticipateCard {...props} />,
    [$Card.AVAILABLE]: <AvailableCard {...props} />,
    [$Card.HOST]: <HostCard {...props} />,
    [$Card.SET]: <SetCard {...props} />,
    [$Card.AGAIN]: <AgainCard {...props} />,
    [$Card.WORKS]: <WorksCard {...props} />,
    [$Card.SHARING]: <SharingCard {...props} />,
    [$Card.HOW]: <HowCard {...props} />,
    [$Card.ANYWHERE]: <AnywhereCard {...props} />,
    [$Card.HOSTING]: <HostingCard {...props} />,
    [$Card.VIDEO]: <VideoCard {...props} />,
    [$Card.STARTING]: <StartingCard {...props} />,
    [$Card.COLLECTION]: <CollectionCard {...props} />,
  } as const;

  if (to) {
    return (
      <div
        css={{
          cursor: "pointer",
          textAlign: "left",
          display: "block",
          heigth: "100%",
          width: "100%",
          ...extendsTo,
        }}
        data-testid={`${variant}-card--molecule`}
        onClick={() => Router.push(to)}
      >
        {variant && variants[variant]}
      </div>
    );
  }

  return (
    <div data-testid={`${variant}-card`} className={extendsTo}>
      {variant && variants[variant]}
    </div>
  );
};
