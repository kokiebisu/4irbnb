import React from 'react';
import Link from 'next/link';
import { LandingCard } from './card.landing';

export interface CardProps {
  extendsTo?: string;
  type: string;
  card: {
    imgUrl: string;
    title: string;
    description: string;
    to: string;
  };
}

interface mapProps {
  [key: string]: JSX.Element;
}

export const Card: React.FC<CardProps> = ({ extendsTo, type, ...props }) => {
  const { card } = props;
  const types: mapProps = {
    landing: <LandingCard {...props} />,
  };
  return (
    <Link href={card.to}>
      <a data-testid='card' className={extendsTo}>
        {types[type]}
      </a>
    </Link>
  );
};
