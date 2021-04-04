import { DescriptionTemplate } from 'components/segments/experiences/id/description/template';
import { useDescription } from './logic';

export const Description = () => {
  const data = useDescription();
  return <DescriptionTemplate {...data} />;
};
