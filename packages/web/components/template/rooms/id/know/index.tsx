import { KnowTemplate } from './template';
import { useKnow } from './logic';

export const Know = () => {
  const data = useKnow();
  return <KnowTemplate {...data} />;
};
