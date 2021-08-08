import { useParticipateCard } from "./logic";
import { ParticipateCardTemplate } from "./template";

export type ParticipateCardProps = {
  categoryType: "call" | "private" | "request";
};

export const ParticipateCard = (props: ParticipateCardProps): JSX.Element => {
  const data = useParticipateCard(props);
  return <ParticipateCardTemplate {...data} />;
};
