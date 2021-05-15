import { PrioritySegmentTemplate } from './template';

export const PrioritySegment = (props) => {
  return <PrioritySegmentTemplate />;
};

export const priority = (props) => {
  return {
    priority: {
      component: <PrioritySegment {...props} />,
    },
  };
};
