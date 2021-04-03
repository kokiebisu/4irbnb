import { useDescription } from './logic';
import { DescriptionTemplate } from './template';

export const Description = () => {
  const { props } = useDescription();
  return <DescriptionTemplate {...props} />;
};
