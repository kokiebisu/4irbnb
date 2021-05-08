import { useExperiencesSegment } from './logic';
import { ExperiencesSegmentTemplate } from './template';

export const ExperiencesSegment = () => {
  const data = useExperiencesSegment();
  return <ExperiencesSegmentTemplate {...data} />;
};

export const experiences = (props) => {
  return {
    experiences: {
      component: <ExperiencesSegment {...props} />,
    },
  };
};
