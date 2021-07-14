import { useParticipateCard } from "./logic";
import {
  ParticipateCardTemplate,
  ParticipateCardTemplateProps,
} from "./template";

export type ParticipateCardProps = ParticipateCardTemplateProps;

export const ParticipateCard = (props: ParticipateCardProps): JSX.Element => {
  const data = useParticipateCard(props);
  return <ParticipateCardTemplate {...props} {...data} />;
};
