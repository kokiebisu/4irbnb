import React from 'react';
import { AmenityBulletTemplate, AmenityBulletTemplateProps } from './template';

export interface AmenityBulletProps extends AmenityBulletTemplateProps {}

const AmenityBullet: React.FC<AmenityBulletProps> = (props) => {
  return <AmenityBulletTemplate {...props} />;
};

export const amenity = (props) => {
  return {
    amenity: { component: <AmenityBullet {...props} /> },
  };
};
