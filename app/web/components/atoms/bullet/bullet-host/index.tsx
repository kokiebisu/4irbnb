import { HostBulletTemplateProps } from './template';

export interface HostBulletProps extends HostBulletTemplateProps {}

export const HostBullet: React.FC<HostBulletProps> = (props) => {
  return <HostBullet {...props} />;
};
