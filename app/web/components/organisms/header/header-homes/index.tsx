import { HomesHeaderTemplate, HomesHeaderTemplateProps } from "./template";

export interface HomesHeaderProps extends HomesHeaderTemplateProps {}

export const HomesHeader = (props: HomesHeaderProps): JSX.Element => {
  return <HomesHeaderTemplate {...props} />;
};
