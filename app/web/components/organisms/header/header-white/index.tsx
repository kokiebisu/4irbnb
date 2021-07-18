import { WhiteHeaderTemplate, WhiteHeaderTemplateProps } from "./template";

export type WhiteHeaderProps = WhiteHeaderTemplateProps;

export const WhiteHeader = (props: WhiteHeaderProps): JSX.Element => {
  return <WhiteHeaderTemplate {...props} />;
};
