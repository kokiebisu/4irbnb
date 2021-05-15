import React from 'react';
import { ExperienceBulletTemplate } from './template';

export type ExperienceTypeProps = 'hosts' | 'activities' | 'global';

export interface ExperienceBulletProps {
  experienceType?: ExperienceTypeProps;
}

const ExperienceBullet: React.FC<ExperienceBulletProps> = (props) => {
  return <ExperienceBulletTemplate {...props} />;
};

export const experience = (props) => {
  return {
    experience: {
      component: <ExperienceBullet {...props} />,
    },
  };
};
