import { useArrangements } from './logic';
import { ArrangementsTemplate } from './template';

export const Arrangements = () => {
  const data = useArrangements();
  return <ArrangementsTemplate {...data} />;
};
