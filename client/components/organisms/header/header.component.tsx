import React from 'react';
import { TransparentHeader } from './header.transparent';
import { WhiteHeader } from './header.white';

export interface HeaderProps {
  extendsTo?: string;
  type: string;
  spread?: boolean;
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
    transparent: <TransparentHeader {...props} />,
    white: <WhiteHeader {...props} />,
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
