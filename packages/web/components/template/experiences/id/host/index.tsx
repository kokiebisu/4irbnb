import { useHost } from './logic';
import { HostTemplate } from './template';

export const Host = () => {
  const data = useHost();
  return <HostTemplate {...data} />;
};
