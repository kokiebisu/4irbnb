import {
  ExperienceBulletTemplate,
  ExperienceBulletTemplateProps,
} from './template';

export type ExperienceTypeProps = 'hosts' | 'activities' | 'global';

export interface ExperienceBulletProps extends ExperienceBulletTemplateProps {
  variant: 'experience';
}

const ExperienceBullet: React.FC<ExperienceBulletProps> = (props) => {
  return <ExperienceBulletTemplate {...props} />;
};

export const experience = (props: ExperienceBulletProps) => {
  return {
    experience: {
      component: <ExperienceBullet {...props} />,
    },
  };
};
