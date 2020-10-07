import React from 'react';
import { LandingHeader } from './header.landing';

export interface HeaderProps {
  extendsTo?: string;
  type: string;
}

interface mapProps {
  [key: string]: JSX.Element;
}

export const Header: React.FC<HeaderProps> = ({
  type,
  extendsTo,
  ...props
}) => {
  const types: mapProps = {
    landing: <LandingHeader {...props} />,
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
