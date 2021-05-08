import { useCommunitySegment } from './logic';
import { CommunitySegmentTemplate } from './template';

export const CommunitySegmentSegment = (props) => {
  const data = useCommunitySegment();
  return <CommunitySegmentTemplate {...data} {...props} />;
};

export const community = (props) => {
  return {
    community: {
      component: <CommunitySegmentSegment {...props} />,
    },
  };
};
