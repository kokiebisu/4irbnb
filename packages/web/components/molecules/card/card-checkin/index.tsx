import { CheckInCardTemplate } from './template';

export const CheckInCard = (props) => {
  return <CheckInCardTemplate {...props} />;
};

export const checkin = (props) => {
  return {
    checkin: {
      component: <CheckInCard {...props} />,
    },
  };
};
