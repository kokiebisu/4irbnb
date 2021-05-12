import { HostingSegmentTemplate } from './template';

export const HostingSegment = (props) => {
  return <HostingSegmentTemplate {...props} />;
};

export const hosting = (props) => {
  return {
    hosting: {
      component: <HostingSegment {...props} />,
    },
  };
};
