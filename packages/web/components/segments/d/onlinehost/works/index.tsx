import { useWorksSegment } from './logic';
import { WorksSegmentTemplate } from './template';

export const WorksSegment = () => {
  const data = useWorksSegment();
  return <WorksSegmentTemplate {...data} />;
};

export const works = (props) => {
  return {
    works: {
      component: <WorksSegment {...props} />,
    },
  };
};
