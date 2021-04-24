import { AvailableCardTemplate } from './template';

const AvailableCard = (props) => {
  return <AvailableCardTemplate {...props} />;
};

export const available = (props) => {
  return {
    available: {
      component: <AvailableCard {...props} />,
    },
  };
};
