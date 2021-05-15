import { SetCardTemplate } from './template';

const SetCard = (props) => {
  return <SetCardTemplate {...props} />;
};

export const set = (props) => {
  return {
    set: {
      component: <SetCard {...props} />,
    },
  };
};
