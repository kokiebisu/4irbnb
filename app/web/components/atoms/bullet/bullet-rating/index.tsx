import { RatingBulletTemplate, RatingBulletTemplateProps } from './template';

export interface RatingBulletProps extends RatingBulletTemplateProps {}

const RatingBullet: React.FC<RatingBulletProps> = (props) => {
  return <RatingBulletTemplate {...props} />;
};

export const rating = (props: RatingBulletProps) => {
  return {
    rating: { component: <RatingBullet {...props} /> },
  };
};
