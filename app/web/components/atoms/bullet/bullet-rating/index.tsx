import { RatingBulletTemplate, RatingBulletTemplateProps } from './template';

export type RatingBulletProps = RatingBulletTemplateProps;

export const RatingBullet = (props: RatingBulletProps): JSX.Element => {
  return <RatingBulletTemplate {...props} />;
};
