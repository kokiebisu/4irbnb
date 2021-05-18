import {
  ExperienceBulletTemplate,
  ExperienceBulletTemplateProps,
} from './template';

export type ExperienceTypeProps = 'hosts' | 'activities' | 'global';

export interface ExperienceBulletProps extends ExperienceBulletTemplateProps {
  variant: 'experience';
}

export const ExperienceBullet: React.FC<ExperienceBulletProps> = (props) => {
  return <ExperienceBulletTemplate {...props} />;
};
