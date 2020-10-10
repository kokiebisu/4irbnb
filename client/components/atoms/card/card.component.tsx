import React from 'react';
import Link from 'next/link';
import { LandingCard } from './card.landing';
import { HorizontalCard } from './card.horizontal';
import { VerticalCard } from './card.vertical';
import { TypeStayCard } from './card.typestay';

interface CardObjectProps {
  imgUrl: string;
  title: string;
  to: string;
}

export interface LandingCardObjectProps extends CardObjectProps {
  description: string;
}

export interface HorizontalCardObjectProps extends CardObjectProps {
  superhost: boolean;
  ratings: number;
  number_of_reviews: number;
  type: string;
  location: string;
}

export interface VerticalCardObjectProps extends CardObjectProps {
  ratings: number;
  number_of_reviews: number;
  cost: number;
  country: string;
}

export interface TypeStayCardObjectProps extends CardObjectProps {}

export interface CardProps {
  extendsTo?: string;
  type: string;
  card:
    | LandingCardObjectProps
    | HorizontalCardObjectProps
    | VerticalCardObjectProps
    | TypeStayCardObjectProps;
  save?: boolean;
}

interface mapProps {
  [key: string]: JSX.Element;
}

export const Card: React.FC<CardProps> = ({ extendsTo, type, ...props }) => {
  const { card } = props;
  const types: mapProps = {
    landing: <LandingCard {...props} />,
    horizontal: <HorizontalCard {...props} />,
    vertical: <VerticalCard {...props} />,
    typestay: <TypeStayCard {...props} />,
  };
  return (
    <Link href={card.to}>
      <a data-testid='card' className={extendsTo}>
        {types[type]}
      </a>
    </Link>
  );
};
