import { useAlso } from './logic';
import { AlsoTemplate } from './template';

export const Also = () => {
  const data = useAlso();
  return <AlsoTemplate {...data} />;
};
