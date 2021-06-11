import {
  SecondaryBulletTemplate,
  SecondaryBulletTemplateProps,
} from './template';

export type SecondaryBulletProps = SecondaryBulletTemplateProps;

export const SecondaryBullet = (props: SecondaryBulletProps): JSX.Element => {
  return <SecondaryBulletTemplate {...props} />;
};
