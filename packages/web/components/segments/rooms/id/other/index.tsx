import { useOther } from './logic';
import { OtherTemplate } from './template';

export const Other = () => {
  const data = useOther();
  return <OtherTemplate {...data} />;
};
