import {
  RequiredBulletTemplate,
  RequiredBulletTemplateProps,
} from './template';

export type RequiredBulletProps = RequiredBulletTemplateProps;

export const RequiredBullet = (props: RequiredBulletProps): JSX.Element => {
  return <RequiredBulletTemplate {...props} />;
};
