import { useSharing } from './logic';
import { SharingSegmentTemplate } from './template';

export const SharingSegment = () => {
  const data = useSharing();
  return <SharingSegmentTemplate {...data} />;
};

export const sharing = (props) => {
  return {
    sharing: {
      component: <SharingSegment {...props} />,
    },
  };
};
