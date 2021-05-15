import { BringBulletTemplate } from './template';

export interface BringBulletProps {}

const BringBullet: React.FC<BringBulletProps> = (props) => {
  return <BringBulletTemplate {...props} />;
};

export const bring = (props: BringBulletProps) => {
  return {
    bring: { component: <BringBullet {...props} /> },
  };
};
