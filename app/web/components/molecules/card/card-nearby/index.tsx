import { useNearbyCard } from "./logic";
import { NearbyCardTemplate, NearbyCardTemplateProps } from "./template";

export type NearbyCardProps = NearbyCardTemplateProps;

export const NearbyCard = (props: NearbyCardProps): JSX.Element => {
  const data = useNearbyCard();
  return <NearbyCardTemplate {...props} {...data} />;
};
