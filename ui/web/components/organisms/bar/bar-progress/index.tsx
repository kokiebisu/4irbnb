import { ProgressBarTemplate } from './template';

const ProgressBar = (props) => {
  return (
    <div data-testid="bar-progress--organism">
      <ProgressBarTemplate {...props} />
    </div>
  );
};

export const progress = (props) => {
  return {
    progress: {
      component: <ProgressBar {...props} />,
    },
  };
};
