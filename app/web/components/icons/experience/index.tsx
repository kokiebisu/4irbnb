import {
  ExperienceIconTemplate,
  ExperienceIconTemplateProps,
} from './template';

export type ExperienceIconProps = ExperienceIconTemplateProps;

export const ExperienceIcon = (props: ExperienceIconProps): JSX.Element => {
  return <ExperienceIconTemplate {...props} />;
};
