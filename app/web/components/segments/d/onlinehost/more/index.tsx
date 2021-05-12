import { MoreSegmentTemplate } from './template';

export const MoreSegment = (props) => {
  return <MoreSegmentTemplate {...props} />;
};

export const more = (props) => {
  return {
    more: {
      component: <MoreSegment {...props} />,
    },
  };
};
