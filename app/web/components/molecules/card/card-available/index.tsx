import { AvailableCardTemplate, AvailableCardTemplateProps } from "./template";

export type AvailableCardProps = AvailableCardTemplateProps;

export const AvailableCard = (props: AvailableCardProps): JSX.Element => (
  <AvailableCardTemplate {...props} />
);
