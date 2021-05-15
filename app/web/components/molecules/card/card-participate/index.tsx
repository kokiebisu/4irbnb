import { useParticipateCard } from './logic';
import { ParticipateCardTemplate } from './template';

const ParticipateCard = (props) => {
  const data = useParticipateCard(props);
  return <ParticipateCardTemplate {...props} {...data} />;
};

export const participate = (props) => {
  return {
    participate: {
      component: <ParticipateCard {...props} />,
    },
  };
};
