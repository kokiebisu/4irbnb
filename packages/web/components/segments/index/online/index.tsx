import { useOnline } from './logic';
import { OnlineTemplate } from './template';

export const Online = () => {
  const data = useOnline();
  return <OnlineTemplate {...data} />;
};
