import { RatingBulletTemplate, RatingBulletTemplateProps } from './template';

export interface RatingBulletProps extends RatingBulletTemplateProps {}

export const RatingBullet: React.FC<RatingBulletProps> = (props) => {
  return <RatingBulletTemplate {...props} />;
};
