import React from 'react';
import Link from 'next/link';
import { LandingCard } from './card.landing';
import { HorizontalCard } from './card.horizontal';
import { VerticalCard } from './card.vertical';
import { TypeStayCard } from './card.typestay';

export type CardObjectProps =
  | { imgUrl: string; title: string; description: string }
  | {
      imgUrl: string;
      title: string;
      ratings: number;
      number_of_reviews: number;
      type: string;
      location: string;
    }
  | {
      imgUrl: string;
      title: string;
      ratings: number;
      number_of_reviews: number;
      cost: number;
      country: string;
    }
  | { imgUrl: string; title: string };

export interface CardProps {
  extendsTo?: string;
  type: string;
  card: CardObjectProps;
  save?: boolean;
  superhost?: boolean;
  to?: string;
}

interface mapProps {
  [key: string]: JSX.Element;
}

export const Card: React.FC<CardProps> = ({
  extendsTo,
  type,
  to = '/',
  ...props
}) => {
  const types: mapProps = {
    landing: <LandingCard {...props} />,
    horizontal: <HorizontalCard {...props} />,
    vertical: <VerticalCard {...props} />,
    typestay: <TypeStayCard {...props} />,
  };
  return (
    <Link href={to}>
      <a data-testid='card' className={extendsTo}>
        {types[type]}
      </a>
    </Link>
  );
};
