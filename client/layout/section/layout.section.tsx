import React from 'react';
import { SectionLayoutProps } from './props';
import { HomesLayout } from './layout.homes';
import { LandingLayout } from './layout.landing';

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  extendsTo,
  sectionType,
  ...props
}) => {
  const types = {
    homes: <HomesLayout {...props} />,
    landing: <LandingLayout {...props} />,
  };
  return (
    <div className={extendsTo} data-testid='section'>
      {types[sectionType]}
    </div>
  );
};
