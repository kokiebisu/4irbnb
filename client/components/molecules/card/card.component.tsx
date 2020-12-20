import React from "react";
import Link from "next/link";

/** components */
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
  };
  if (to) {
    return (
      <Link href={to}>
        <a data-testid={`${variant}-card`} className={extendsTo}>
          {variants[variant]}
        </a>
      </Link>
    );
  }
  return (
    <div data-testid={`${variant}-card`} className={extendsTo}>
      {variants[variant]}
    </div>
  );
};
