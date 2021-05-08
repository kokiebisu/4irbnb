import { BackSegmentTemplate } from './template';

export const BackSegment = () => {
  return <BackSegmentTemplate />;
};

export const back = (props) => {
  return {
    back: {
      component: <BackSegment {...props} />,
    },
  };
};
