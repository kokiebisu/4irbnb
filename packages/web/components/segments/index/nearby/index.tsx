import { useNearby } from './logic';
import { NearbyTemplate } from './template';

export const Nearby = () => {
  const data = useNearby()
  return <NearbyTemplate {...data}/>;
};
