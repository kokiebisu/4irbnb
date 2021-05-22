import { BringBulletTemplate, BringBulletTemplateProps } from './template';

export type BringBulletProps = BringBulletTemplateProps;

export const BringBullet = (props: BringBulletProps): JSX.Element => {
  return <BringBulletTemplate {...props} />;
};
