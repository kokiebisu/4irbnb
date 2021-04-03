import { useExperiences } from './logic';
import { ExperiencesTemplate } from './template';

export const Experiences = () => {
  const data = useExperiences();
  return <ExperiencesTemplate {...data} />;
};
