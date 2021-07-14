import { WhiteHeaderTemplate, WhiteHeaderTemplateProps } from "./template";

export interface WhiteHeaderProps extends WhiteHeaderTemplateProps {}

export const WhiteHeader = (props: WhiteHeaderProps): JSX.Element => {
  return <WhiteHeaderTemplate {...props} />;
};
