import React from 'react';

import { LandingHeader } from 'organisms/Header/header.landing';

export type HeaderProps = {
  type?: string;
};

interface mapProps {
  [key: string]: JSX.Element;
}

export const Header: React.Props<HeaderProps> = ({ type, ...props }) => {
  if (!type) {
    return null;
  }
  const types: mapProps = {
    landing: <LandingHeader {...props} />,
  };
  return types[type];
};
