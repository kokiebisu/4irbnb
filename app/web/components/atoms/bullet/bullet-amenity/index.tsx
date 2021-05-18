import { AmenityBulletTemplate, AmenityBulletTemplateProps } from './template';

export interface AmenityBulletProps extends AmenityBulletTemplateProps {}

export const AmenityBullet: React.FC<AmenityBulletProps> = (props) => {
  return <AmenityBulletTemplate {...props} />;
};
