import { HomesHeaderTemplate, HomesHeaderTemplateProps } from "./template";

export type HomesHeaderProps = HomesHeaderTemplateProps;

export const HomesHeader = (props: HomesHeaderProps): JSX.Element => {
  return <HomesHeaderTemplate {...props} />;
};
