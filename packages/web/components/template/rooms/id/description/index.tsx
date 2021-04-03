import { DescriptionTemplate } from '@template/experiences/id/description/template';
import { useDescription } from './logic';

export const Description = () => {
  const data = useDescription();
  return <DescriptionTemplate {...data} />;
};
