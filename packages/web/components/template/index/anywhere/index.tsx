import { useAnywhere } from './logic';
import { AnywhereTemplate } from './template';

export const Anywhere = () => {
  const data = useAnywhere();
  return <AnywhereTemplate {...data} />;
};
