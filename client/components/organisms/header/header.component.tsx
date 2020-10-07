import React from 'react';
import { LandingHeader } from './header.landing';

export interface HeaderProps {
  extendsTo?: string;
  type: string;
}

interface mapProps {
  [key: string]: JSX.Element;
}

export const Header = ({ type, ...props }) => {
  const types: mapProps = {
    landing: <LandingHeader {...props} />,
  };
  return <div>{types[type]}</div>;
};
