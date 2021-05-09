import { HostCardTemplate } from './template';

export const HostCard = (props) => {
  return <HostCardTemplate {...props} />;
};

export const host = (props) => {
  return {
    host: {
      component: <HostCard {...props} />,
    },
  };
};
