import { CovidBarTemplate } from './template';

const CovidBar = (props) => {
  return (
    <div data-testid="bar-covid--organism">
      <CovidBarTemplate {...props} />
    </div>
  );
};

export const covid = (props) => {
  return {
    covid: {
      component: <CovidBar {...props} />,
    },
  };
};
