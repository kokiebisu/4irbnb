import { useSpacesSegment } from './logic';
import { SpacesSegmentTemplate } from './template';

export const SpacesSegment = () => {
  const data = useSpacesSegment();
  return <SpacesSegmentTemplate {...data} />;
};

export const spaces = (props) => {
  return {
    spaces: {
      component: <SpacesSegment {...props} />,
    },
  };
};
