import React from 'react';
import Link from 'next/link';
import { LandingCard } from './card.landing';
import { HorizontalCard } from './card.horizontal';

interface CardObjectProps {
  imgUrl: string;
  title: string;
  to: string;
}

interface LandingCardObjectProps extends CardObjectProps {
  description: string;
}

interface HorizontalCardObjectProps extends CardObjectProps {
  superhost: boolean;
  ratings: number;
  number_of_reviews: number;
  type: string;
  save: boolean;
}

export interface CardProps {
  extendsTo?: string;
  type: string;
  card: LandingCardObjectProps | HorizontalCardObjectProps;
}

interface mapProps {
  [key: string]: JSX.Element;
}

export const Card: React.FC<CardProps> = ({ extendsTo, type, ...props }) => {
  const { card } = props;
  const types: mapProps = {
    landing: <LandingCard {...props} />,
    horizontal: <HorizontalCard {...props} />,
  };
  return (
    <Link href={card.to}>
      <a data-testid='card' className={extendsTo}>
        {types[type]}
      </a>
    </Link>
  );
};
