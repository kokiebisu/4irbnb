import { useCommunity } from './logic';
import { CommunityTemplate } from './template';

export const Community = () => {
  const { data } = useCommunity();
  return <CommunityTemplate {...data}/>;
};
