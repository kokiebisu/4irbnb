import { useDescription } from './logic';
import { DescriptionTemplate } from './template';

export const Description = () => {
  const data = useDescription();
  return <DescriptionTemplate {...data} />;
};
