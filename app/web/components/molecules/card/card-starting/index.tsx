import { StartingCardTemplate } from './template';

const StartingCard = (props) => {
  return <StartingCardTemplate {...props} />;
};

export const starting = (props) => {
  return {
    starting: {
      component: <StartingCard {...props} />,
    },
  };
};
