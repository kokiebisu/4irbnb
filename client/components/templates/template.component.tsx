import React from 'react';
import { TemplateProps } from './props';
import { CategoryTemplate } from './template.category';
import { NearbyTemplate } from './template.nearby';

export const Template: React.FC<TemplateProps> = ({
  type = 'nearby',
  city = 'Paris',
  stayType = 'house',
  characteristics,
}) => {
  const types = {
    nearby: <NearbyTemplate city={city} />,
    category: <CategoryTemplate stayType={stayType} />,
  };
  return types[type];
};
