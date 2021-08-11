import { HostCardTemplate, HostCardTemplateProps } from "./template";

export type HostCardProps = HostCardTemplateProps;

export const HostCard = (props: HostCardProps): JSX.Element => {
  return <HostCardTemplate {...props} />;
};
