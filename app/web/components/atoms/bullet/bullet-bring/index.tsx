import { BringBulletTemplate, BringBulletTemplateProps } from './template';

export interface BringBulletProps extends BringBulletTemplateProps {}

export const BringBullet: React.FC<BringBulletProps> = (props) => {
  return <BringBulletTemplate {...props} />;
};
