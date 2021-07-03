import { HowCardTemplate } from './template';

const HowCard = (props) => {
  return <HowCardTemplate {...props} />;
};

export const how = (props) => {
  return {
    how: {
      component: <HowCard {...props} />,
    },
  };
};
