import { useExperiencesSegment } from './logic';
import {
  ExperiencesSegmentTemplate,
  ExperiencesSegmentTemplateProps,
} from './template';

export interface ExperiencesSegmentProps
  extends ExperiencesSegmentTemplateProps {}

export const ExperiencesSegment: React.FC<ExperiencesSegmentProps> = () => {
  const data = useExperiencesSegment();
  return <ExperiencesSegmentTemplate {...data} />;
};

export const experiences = (props: ExperiencesSegmentProps) => {
  return {
    experiences: {
      component: <ExperiencesSegment {...props} />,
    },
  };
};
