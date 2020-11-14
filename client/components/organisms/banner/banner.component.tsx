import React from 'react';
import { ExperiencesBanner } from './banner.experiences';
import { HomesBanner } from './banner.homes';
import { BannerProps } from './props';

export const Banner: React.FC<BannerProps> = ({
  type,
  extendsTo,
  ...props
}) => {
  const types = {
    homes: <HomesBanner {...props} />,
    experiences: <ExperiencesBanner {...props} />,
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
