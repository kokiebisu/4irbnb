import { useHorizontalCard } from "@card/card-horizontal/logic";
import { HostingCardTemplate, HostingCardTemplateProps } from "./template";

export type HostingCardProps = HostingCardTemplateProps;

export const HostingCard = (props: HostingCardProps): JSX.Element => {
  const data = useHorizontalCard(props);
  return <HostingCardTemplate {...props} {...data} />;
};
