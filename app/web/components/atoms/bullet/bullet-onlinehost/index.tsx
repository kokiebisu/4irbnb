import {
  OnlineHostBulletTemplate,
  OnlineHostBulletTemplateProps,
} from './template';

export interface OnlineHostBulletProps extends OnlineHostBulletTemplateProps {}

export const OnlineHostBullet: React.FC<OnlineHostBulletProps> = (props) => {
  return <OnlineHostBulletTemplate {...props} />;
};
