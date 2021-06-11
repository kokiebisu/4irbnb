import { AmenityBulletTemplate, AmenityBulletTemplateProps } from './template';

export type AmenityBulletProps = AmenityBulletTemplateProps;

export const AmenityBullet = (props: AmenityBulletProps): JSX.Element => {
  return <AmenityBulletTemplate {...props} />;
};
