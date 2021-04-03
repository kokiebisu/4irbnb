import { useWorks } from './logic';
import { WorksTemplate } from './template';

export const Works = () => {
  const data = useWorks();
  return <WorksTemplate {...data} />;
};
