import { CardObjectProps } from 'components/atoms/card/card.component';
import React from 'react';
import { CategorySection } from './section.category';
import { StaySection } from './section.stay';

export interface SectionProps {
  extendsTo?: string;
  type: string;
  items?: {
    card: any;
    to: string;
  }[];
  title?: string;
  carouselType?: string;
  isDescription?: boolean;
  description?: string;
  showAll?: {
    to?: string;
    description?: string;
  };
  pagination?: boolean;
  save?: boolean;
  fetchUrl?: string;
}

interface mapProps {
  [key: string]: JSX.Element;
}

export const Section: React.FC<SectionProps> = ({
  extendsTo,
  type,
  ...props
}) => {
  const types: mapProps = {
    stay: <StaySection {...props} />,
    category: <CategorySection {...props} />,
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
