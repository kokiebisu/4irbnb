import { useMultiple } from './logic';
import { MultipleTemplate } from './template';

export const Multiple = () => {
  const data = useMultiple();
  return <MultipleTemplate {...data} />;
};
