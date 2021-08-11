import { HowCardTemplate, HowCardTemplateProps } from "./template";

export type HowCardProps = HowCardTemplateProps;

export const HowCard = (props: HowCardProps): JSX.Element => (
  <HowCardTemplate {...props} />
);
