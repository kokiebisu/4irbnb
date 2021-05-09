import { VerticalCardTemplate } from './template';

const VerticalCard = (props) => {
  return <VerticalCardTemplate {...props} />;
};

export const vertical = (props) => {
  return {
    vertical: {
      component: <VerticalCard {...props} />,
    },
  };
};
