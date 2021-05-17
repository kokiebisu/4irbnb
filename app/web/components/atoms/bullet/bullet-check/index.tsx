import { CheckBulletTemplate, CheckBulletTemplateProps } from './template';

export interface CheckBulletProps extends CheckBulletTemplateProps {
  variant: 'check';
}

const CheckBullet: React.FC<CheckBulletProps> = (props) => {
  return <CheckBulletTemplate {...props} />;
};

export const check = (props: CheckBulletProps) => {
  return {
    check: { component: <CheckBullet {...props} /> },
  };
};
