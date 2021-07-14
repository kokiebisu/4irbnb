import { LandingHeaderTemplate, LandingHeaderTemplateProps } from "./template";

export interface LandingHeaderProps extends LandingHeaderTemplateProps {}

export const LandingHeader = (props: LandingHeaderProps): JSX.Element => {
  return <LandingHeaderTemplate {...props} />;
};
