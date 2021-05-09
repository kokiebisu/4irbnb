import { DescriptionSegmentTemplate } from 'components/segments/experiences/id/DescriptionSegment/template';
import { useDescriptionSegment } from './logic';

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
