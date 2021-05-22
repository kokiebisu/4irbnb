import {
  PriorityBulletTemplate,
  PriorityBulletTemplateProps,
} from './template';

export type PriorityBulletProps = PriorityBulletTemplateProps;

export const PriorityBullet = (props: PriorityBulletProps) => {
  return <PriorityBulletTemplate {...props} />;
};
