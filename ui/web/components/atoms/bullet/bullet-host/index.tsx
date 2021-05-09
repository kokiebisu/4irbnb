import { HostBulletTemplateProps } from './template';

export interface HostBulletProps extends HostBulletTemplateProps {}

const HostBullet: React.FC<HostBulletProps> = (props) => {
  return <HostBullet {...props} />;
};

export const host = (props) => {
  return {
    host: { component: <HostBullet {...props} /> },
  };
};
