import { useAll } from './logic';
import { AllTemplate } from './template';

export const All = () => {
  const { data } = useAll();
  return <AllTemplate {...data} />;
};
