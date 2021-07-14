import {
  ExperiencePanelTemplate,
  ExperiencePanelTemplateProps,
} from "./template";

export type ExperiencePanelProps = ExperiencePanelTemplateProps;

export const ExperiencePanel = (props: ExperiencePanelProps): JSX.Element => {
  return <ExperiencePanelTemplate {...props} />;
};
