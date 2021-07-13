import { AvailableCardTemplate, AvailableCardTemplateProps } from "./template";

export type AvailableCardProps = AvailableCardTemplateProps;

const AvailableCard = (props: AvailableCardProps): JSX.Element => (
  <AvailableCardTemplate {...props} />
);
