import { useAvailable } from './logic';
import { AvailableTemplate } from './template';

export const Available = () => {
  const data = useAvailable();
  return <AvailableTemplate {...data} />;
};
