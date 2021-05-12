import { useMultipleSegment } from './logic';
import { MultipleSegmentTemplate } from './template';

export const MultipleSegment = () => {
  const data = useMultipleSegment();
  return <MultipleSegmentTemplate {...data} />;
};

export const multiple = (props) => {
  return {
    multiple: {
      component: <MultipleSegment {...props} />,
    },
  };
};
