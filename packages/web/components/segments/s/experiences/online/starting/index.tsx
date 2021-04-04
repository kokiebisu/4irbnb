import { useStarting } from './logic';
import { StartingTemplate } from './template';

export const Starting = () => {
  const data = useStarting();
  return <StartingTemplate {...data} />;
};
