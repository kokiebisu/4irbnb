import {
  ExperienceIconTemplate,
  ExperienceIconTemplateProps,
} from './template';

export type ExperienceIconProps = ExperienceIconTemplateProps & {
  width: number;
  height: number;
};

export const ExperienceIcon = (props: ExperienceIconProps): JSX.Element => {
  return (
    <div data-testid="experience-icon">
      <ExperienceIconTemplate {...props} />
    </div>
  );
};
