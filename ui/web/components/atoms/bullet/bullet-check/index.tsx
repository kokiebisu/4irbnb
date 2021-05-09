import { CheckBulletTemplate, CheckBulletTemplateProps } from './template';

export interface CheckBulletProps extends CheckBulletTemplateProps {}

const CheckBullet: React.FC<CheckBulletProps> = (props) => {
  return <CheckBulletTemplate {...props} />;
};

export const check = (props) => {
  return {
    check: { component: <CheckBullet {...props} /> },
  };
};
