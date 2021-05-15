import {
  ExperiencesHeaderTemplate,
  ExperiencesHeaderTemplateProps,
} from './template';

export interface ExperiencesHeaderProps
  extends ExperiencesHeaderTemplateProps {}

export const ExperiencesHeader = (props) => {
  return <ExperiencesHeaderTemplate {...props} />;
};

export const experiences = (props) => {
  return {
    experiences: {
      component: <ExperiencesHeader {...props} />,
    },
  };
};
