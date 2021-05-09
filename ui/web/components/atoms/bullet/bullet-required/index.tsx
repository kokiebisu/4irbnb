import {
  RequiredBulletTemplate,
  RequiredBulletTemplateProps,
} from './template';

export interface RequiredBulletProps extends RequiredBulletTemplateProps {}

const RequiredBullet: React.FC<RequiredBulletProps> = (props) => {
  return <RequiredBulletTemplate {...props} />;
};

export const required = (props) => {
  return {
    required: { component: <RequiredBullet {...props} /> },
  };
};
