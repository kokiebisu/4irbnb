import { useHomes } from './logic';
import { HomesTemplate } from './template';

export const Homes = () => {
  const data = useHomes();
  return <HomesTemplate {...data}/>;
};
