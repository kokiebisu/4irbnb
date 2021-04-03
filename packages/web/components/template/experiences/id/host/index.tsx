import { useHost } from './logic';
import { HostTemplate } from './template';

export const Host = () => {
  const { props } = useHost();
  return <HostTemplate {...props} />;
};
