import { useAll } from './logic';
import { AllTemplate } from './template';

export const All = () => {
  const { props } = useAll();
  return <AllTemplate {...props} />;
};
