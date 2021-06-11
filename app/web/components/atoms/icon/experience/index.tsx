import {
  ExperienceIconTemplate,
  ExperienceIconTemplateProps,
} from './template';

export type ExperienceIconProps = ExperienceIconTemplateProps & {
  width: number;
  height: number;
};

export const ExperienceIcon = ({
  width,
  height,
  ...props
}: ExperienceIconProps): JSX.Element => {
  return (
    <div data-testid="experience-icon" style={{ width, height }}>
      <ExperienceIconTemplate {...props} />
    </div>
  );
};
