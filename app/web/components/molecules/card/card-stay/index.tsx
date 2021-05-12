import { StayCardTemplate } from './template';

const StayCard = (props) => {
  return <StayCardTemplate {...props} />;
};

export const stay = (props) => {
  return {
    stay: {
      component: <StayCard {...props} />,
    },
  };
};
