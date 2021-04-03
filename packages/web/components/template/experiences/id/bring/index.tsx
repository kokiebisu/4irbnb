import { useBring } from './logic';
import { BringTemplate } from './template';

export const Bring = () => {
  const data = useBring();
  return <BringTemplate {...data} />;
};
