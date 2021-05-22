import { CheckBulletTemplate, CheckBulletTemplateProps } from './template';

export type CheckBulletProps = CheckBulletTemplateProps;

export const CheckBullet = (props: CheckBulletProps): JSX.Element => {
  return <CheckBulletTemplate {...props} />;
};
