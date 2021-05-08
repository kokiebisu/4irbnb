import { useDescriptionSegment } from './logic';
import { DescriptionSegmentTemplate } from './template';

export const DescriptionSegment = () => {
  const data = useDescriptionSegment();
  return <DescriptionSegmentTemplate {...data} />;
};

export const description = (props) => {
  return {
    description: {
      component: <DescriptionSegment {...props} />,
    },
  };
};
