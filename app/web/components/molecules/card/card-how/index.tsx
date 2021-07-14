import { HowCardTemplate, HowCardTemplateProps } from "./template";

export type HowCardProps = HowCardTemplateProps;

const HowCard = (props: HowCardProps): JSX.Element => (
  <HowCardTemplate {...props} />
);
