import { AmenityBulletTemplate, AmenityBulletTemplateProps } from './template';

export interface AmenityBulletProps extends AmenityBulletTemplateProps {
  variant: 'amenity';
}

export const AmenityBullet: React.FC<AmenityBulletProps> = (props) => {
  return <AmenityBulletTemplate {...props} />;
};
