import Router from "next/router";

/** styles */
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";

/** components */
import { CategoryCard } from "@card/card.category";
import { HorizontalCard } from "@card/card.horizontal";
import { VerticalCard } from "@card/card.vertical";
import { TypeStayCard } from "@card/card.typestay";
import { ArrangementsCard } from "@card/card.arrangements";
import { CheckInCard } from "@card/card.checkin";
import { ReviewCard } from "@card/card.review";
import { StayCard } from "@card/card.stay";
import { NearbyCard } from "@card/card.nearby";
import { OnlineCard } from "@card/card.online";
import { ParticipateCard } from "@card/card.participate";
import { AvailableCard } from "@card/card.available";
import { HostCard } from "@card/card.host";
import { SetCard } from "@card/card.set";
import { AgainCard } from "@card/card.again";
import { WorksCard } from "@card/card.works";
import { SharingCard } from "@card/card.sharing";
import { HowCard } from "@card/card.how";
import { AnywhereCard } from "./card.anywhere";
import { HostingCard } from "./card.hosting";

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
