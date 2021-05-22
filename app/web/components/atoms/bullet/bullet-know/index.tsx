import { KnowBulletTemplate, KnowBulletTemplateProps } from './template';

export type KnowBulletProps = KnowBulletTemplateProps;

export const KnowBullet = (props: KnowBulletProps): JSX.Element => {
  return <KnowBulletTemplate {...props} />;
};
