import { CovidBarTemplate } from './template';

const CovidBar = (props) => {
  return <CovidBarTemplate {...props} />;
};

export const covid = (props) => {
  return {
    covid: {
      component: <CovidBar {...props} />,
    },
  };
};
