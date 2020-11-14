import React from 'react';
import { ExperiencesBanner } from './banner.experiences';
import { HomesBanner } from './banner.homes';

/**
 * Props
 */
import { BannerProps } from './props';

/**
 * Bundles the banner components
 * @param {string} extendsTo - Adds custom style to the selected component
 * @param {type} type - Specifies type of section component
 */
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
