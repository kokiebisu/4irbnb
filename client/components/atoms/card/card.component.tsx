import React from 'react';
import Link from 'next/link';
import { CategoryCard } from './card.category';
import { HorizontalCard } from './card.horizontal';
import { VerticalCard } from './card.vertical';
import { TypeStayCard } from './card.typestay';
import { CardProps } from './props';
import { ArrangementsCard } from './card.arrangements';
import { CheckInCard } from './card.checkin';
import { ReviewCard } from './card.review';
import { StayCard } from './card.stay';
import { NearbyCard } from './card.nearby';
import { OnlineCard } from './card.online';
import { ParticipateCard } from './card.participate';
import { AvailableCard } from './card.available';

interface mapProps {
  [key: string]: JSX.Element;
}

export const Card: React.FC<CardProps> = ({
  extendsTo,
  type,
  to,
  ...props
}) => {
  const types: mapProps = {
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
  };
  if (to) {
    return (
      <Link href={to}>
        <a data-testid='card' className={extendsTo}>
          {types[type]}
        </a>
      </Link>
    );
  }
  return (
    <div data-testid='card' className={extendsTo}>
      {types[type]}
    </div>
  );
};
