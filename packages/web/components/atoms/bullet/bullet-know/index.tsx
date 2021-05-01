import { KnowBulletTemplate, KnowBulletTemplateProps } from './template';

export interface KnowBulletProps extends KnowBulletTemplateProps {}

const KnowBullet: React.FC<KnowBulletProps> = (props) => {
  return <KnowBulletTemplate {...props} />;
};

export const know = (props) => {
  return {
    know: { component: <KnowBullet {...props} /> },
  };
};
