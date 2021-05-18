import { CheckBulletTemplate, CheckBulletTemplateProps } from './template';

export interface CheckBulletProps extends CheckBulletTemplateProps {
  variant: 'check';
}

export const CheckBullet: React.FC<CheckBulletProps> = (props) => {
  return <CheckBulletTemplate {...props} />;
};
