import {
  RequiredBulletTemplate,
  RequiredBulletTemplateProps,
} from './template';

export interface RequiredBulletProps extends RequiredBulletTemplateProps {}

export const RequiredBullet: React.FC<RequiredBulletProps> = (props) => {
  return <RequiredBulletTemplate {...props} />;
};
