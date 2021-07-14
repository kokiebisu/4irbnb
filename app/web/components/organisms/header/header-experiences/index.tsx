import {
  ExperiencesHeaderTemplate,
  ExperiencesHeaderTemplateProps,
} from "./template";

export type ExperiencesHeaderProps = ExperiencesHeaderTemplateProps;

export const ExperiencesHeader = (props: ExperiencesHeaderProps) => {
  return <ExperiencesHeaderTemplate {...props} />;
};
