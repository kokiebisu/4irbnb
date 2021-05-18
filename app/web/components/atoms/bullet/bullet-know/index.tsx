import { KnowBulletTemplate, KnowBulletTemplateProps } from './template';

export interface KnowBulletProps extends KnowBulletTemplateProps {}

export const KnowBullet: React.FC<KnowBulletProps> = (props) => {
  return <KnowBulletTemplate {...props} />;
};
