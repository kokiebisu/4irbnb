import { useExperiencesSegment } from "./logic";
import { ExperiencesSegmentTemplate } from "./template";

export const ExperiencesSegment = () => {
  const data = useExperiencesSegment();
  return <ExperiencesSegmentTemplate {...data} />;
};
