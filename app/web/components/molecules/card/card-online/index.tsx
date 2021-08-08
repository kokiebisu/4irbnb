import { OnlineCardTemplate, OnlineCardTemplateProps } from "./template";

export type OnlineCardProps = OnlineCardTemplateProps;

export const OnlineCard = (props: OnlineCardProps): JSX.Element => (
  <OnlineCardTemplate {...props} />
);
