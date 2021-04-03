import { useKnow } from './logic';
import { KnowTemplate } from './template';

export const Know = () => {
  const data = useKnow();
  return <KnowTemplate {...data} />;
};
