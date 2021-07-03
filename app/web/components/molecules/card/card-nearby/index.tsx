import { useNearbyCard } from './logic';
import { NearbyCardTemplate } from './template';

const NearbyCard = (props) => {
  const data = useNearbyCard();
  return <NearbyCardTemplate {...props} {...data} />;
};

export const nearby = (props) => {
  return {
    nearby: {
      component: <NearbyCard {...props} />,
    },
  };
};
