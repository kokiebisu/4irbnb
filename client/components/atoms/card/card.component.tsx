import React from 'react';
import Link from 'next/link';
import { CategoryCard } from './card.category';
import { HorizontalCard } from './card.horizontal';
import { VerticalCard } from './card.vertical';
import { TypeStayCard } from './card.typestay';
import { CardProps } from './props';

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
    category: <CategoryCard {...props} />,
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
