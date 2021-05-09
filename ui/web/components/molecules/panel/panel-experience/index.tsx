import { ExperiencePanelTemplate } from './template';

export const ExperiencePanel = (props) => {
  return <ExperiencePanelTemplate {...props} />;
};

export const experience = (props) => {
  return {
    experience: {
      component: <ExperiencePanel {...props} />,
    },
  };
};
