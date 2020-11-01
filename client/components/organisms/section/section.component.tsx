import React from 'react';
import { CategorySection } from './section.category';
import { PanelSection } from './section.panel';
import { StaySection } from './section.stay';
import { CharacteristicsSection } from './section.characteristics';
import { DescriptionSection } from './section.description';
import { SectionProps } from './props';

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
    panel: <PanelSection {...props} />,
    characteristics: <CharacteristicsSection {...props} />,
    description: <DescriptionSection {...props} />,
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
