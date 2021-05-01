import {
  OnlineHostBulletTemplate,
  OnlineHostBulletTemplateProps,
} from './template';

export interface OnlineHostBulletProps extends OnlineHostBulletTemplateProps {}

const OnlineHostBullet: React.FC<OnlineHostBulletProps> = (props) => {
  return <OnlineHostBulletTemplate {...props} />;
};

export const onlinehost = (props) => {
  return {
    onlinehost: { component: <OnlineHostBullet {...props} /> },
  };
};
