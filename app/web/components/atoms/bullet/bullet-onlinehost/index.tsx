import {
  OnlineHostBulletTemplate,
  OnlineHostBulletTemplateProps,
} from './template';

export interface OnlineHostBulletProps extends OnlineHostBulletTemplateProps {}

export const OnlineHostBullet = (props: OnlineHostBulletProps): JSX.Element => {
  return <OnlineHostBulletTemplate {...props} />;
};
