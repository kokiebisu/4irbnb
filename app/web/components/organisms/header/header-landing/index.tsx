import { LandingHeaderTemplate, LandingHeaderTemplateProps } from "./template";

export type LandingHeaderProps = LandingHeaderTemplateProps;

export const LandingHeader = (props: LandingHeaderProps): JSX.Element => {
  return <LandingHeaderTemplate {...props} />;
};
