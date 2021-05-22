import {
  ExperienceBulletTemplate,
  ExperienceBulletTemplateProps,
} from './template';

export type ExperienceTypeProps = 'hosts' | 'activities' | 'global';

export type ExperienceBulletProps = ExperienceBulletTemplateProps;

export const ExperienceBullet = (props: ExperienceBulletProps): JSX.Element => {
  return <ExperienceBulletTemplate {...props} />;
};
