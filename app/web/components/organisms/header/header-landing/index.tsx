import { useLandingHeader } from "./logic";
import { LandingHeaderTemplate, LandingHeaderTemplateProps } from "./template";

export type LandingHeaderProps = LandingHeaderTemplateProps;

export const LandingHeader = (props: LandingHeaderProps): JSX.Element => {
  const data = useLandingHeader();
  return <LandingHeaderTemplate {...props} {...data} />;
};
