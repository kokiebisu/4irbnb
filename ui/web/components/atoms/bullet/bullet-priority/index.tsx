import {
  PriorityBulletTemplate,
  PriorityBulletTemplateProps,
} from './template';

export interface PriorityBulletProps extends PriorityBulletTemplateProps {}

export const PriorityBullet: React.FC<PriorityBulletProps> = (props) => {
  return <PriorityBulletTemplate {...props} />;
};

export const priority = (props) => {
  return {
    priority: { component: <PriorityBullet {...props} /> },
  };
};
