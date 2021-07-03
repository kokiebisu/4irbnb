import { ReadySegmentTemplate } from './template';

export const Ready = (props) => {
  return <ReadySegmentTemplate />;
};

export const ready = (props) => {
  return {
    ready: {
      component: <ReadySegmentTemplate {...props} />,
    },
  };
};
