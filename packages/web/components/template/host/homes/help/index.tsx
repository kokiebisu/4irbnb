import { useHelp } from './logic';
import { HelpTemplate } from './template';

export const Help = () => {
  const data = useHelp();
  return <HelpTemplate {...data} />;
};
