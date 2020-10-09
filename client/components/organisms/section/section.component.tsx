import React from 'react';
import { TypeStay } from './section.typestay';

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
    typestay: <TypeStay {...props} />,
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
