import { NearbyCardTemplate } from './template';

const NearbyCard = (props) => {
  return <NearbyCardTemplate {...props} />;
};

export const nearby = (props) => {
  return {
    nearby: {
      component: <NearbyCard {...props} />,
    },
  };
};
