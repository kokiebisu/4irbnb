import { ArrangementsCardTemplate } from './template';

export const ArrangementsCard = (props) => {
  return <ArrangementsCardTemplate {...props} />;
};

export const arrangements = (props) => {
  return {
    arrangements: {
      component: <ArrangementsCard {...props} />,
    },
  };
};
