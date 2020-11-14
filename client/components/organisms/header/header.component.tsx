import React from 'react';
import { DetailsHeader } from './header.details';
import { ExperiencesHeader } from './header.experiences';
import { HomesHeader } from './header.homes';
import { TransparentHeader } from './header.transparent';
import { WhiteHeader } from './header.white';
import { HeaderProps } from './props';

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
    details: <DetailsHeader {...props} />,
    homes: <HomesHeader {...props} />,
    experiences: <ExperiencesHeader {...props} />,
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
