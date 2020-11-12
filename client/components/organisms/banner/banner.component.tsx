import React from 'react';
import { HomesBanner } from './banner.homes';
import { BannerProps } from './props';

export const Banner: React.FC<BannerProps> = ({
  type,
  extendsTo,
  ...props
}) => {
  const types = {
    homes: <HomesBanner {...props} />,
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
