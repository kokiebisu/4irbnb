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

export const Card: React.FC<CardProps> = ({
  to,
  extendsTo,
  type,
  ...props
}) => {
  const { card } = props;
  const types: mapProps = {
    landing: <LandingCard {...props} />,
  };
  return (
    <Link href={card.to}>
      <a className={extendsTo}>{types[type]}</a>
    </Link>
  );
};
