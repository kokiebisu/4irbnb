import React from 'react';
import { useAmenityBullet } from './logic';
import { AmenityBulletTemplate, AmenityBulletTemplateProps } from './template';

export interface AmenityBulletProps extends AmenityBulletTemplateProps {}

const AmenityBullet: React.FC<AmenityBulletProps> = (props) => {
  const data = useAmenityBullet();
  return <AmenityBulletTemplate {...data} />;
};

export const amenity = (props) => {
  return {
    amenity: { component: <AmenityBullet {...props} /> },
  };
};
