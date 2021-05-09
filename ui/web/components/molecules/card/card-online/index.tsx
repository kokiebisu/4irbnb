import { OnlineCardTemplate } from './template';

const OnlineCard = (props) => {
  return <OnlineCardTemplate {...props} />;
};

export const online = (props) => {
  return {
    online: {
      component: <OnlineCard {...props} />,
    },
  };
};
