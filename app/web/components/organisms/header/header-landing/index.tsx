import { useLandingHeader } from "./logic";
import { LandingHeaderTemplate } from "./template";

export type LandingHeaderProps = {};

export const LandingHeader = (): JSX.Element => {
  const data = useLandingHeader();
  return <LandingHeaderTemplate {...data} />;
};
