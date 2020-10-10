import React from 'react';
import { StaySection } from './section.stay';

export interface SectionProps {
  extendsTo?: string;
  type: string;
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
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
