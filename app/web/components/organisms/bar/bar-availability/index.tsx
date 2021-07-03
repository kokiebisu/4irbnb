import { AvailabilityBarTemplate } from './template';

const AvailabilityBar = (props) => {
  return (
    <div data-testid="bar-availability--organism">
      <AvailabilityBarTemplate {...props} />
    </div>
  );
};

export const availability = (props) => {
  return {
    availability: {
      component: <AvailabilityBar {...props} />,
    },
  };
};
