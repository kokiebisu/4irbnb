import { WorthTemplate } from './template';
import { useWorth } from './logic';

export const Worth = () => {
  const data = useWorth();
  return <WorthTemplate {...data} />;
};
