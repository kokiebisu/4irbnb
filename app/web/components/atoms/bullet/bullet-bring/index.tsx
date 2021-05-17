import { BringBulletTemplate, BringBulletTemplateProps } from './template';

export interface BringBulletProps extends BringBulletTemplateProps {
  variant: 'bring';
}

const BringBullet: React.FC<BringBulletProps> = (props) => {
  return <BringBulletTemplate {...props} />;
};

export const bring = (props: BringBulletProps) => {
  return {
    bring: { component: <BringBullet {...props} /> },
  };
};
