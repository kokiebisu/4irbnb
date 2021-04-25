import { AvailabilityBarTemplate } from './template';

const AvailabilityBar = (props) => {
  return <AvailabilityBarTemplate {...props} />;
};

export const availability = (props) => {
  return {
    availability: {
      component: <AvailabilityBar {...props} />,
    },
  };
};
