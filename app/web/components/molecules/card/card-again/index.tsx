import { AgainCardTemplate } from './template';

export const AgainCard = () => {
  return <AgainCardTemplate />;
};

export const again = () => {
  return {
    again: {
      component: <AgainCard />,
    },
  };
};
