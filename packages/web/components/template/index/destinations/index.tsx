import { useDestinations } from './logic';
import { DestinationsTemplate } from './template';

export const Destinations = () => {
  const data = useDestinations();
  return <DestinationsTemplate {...data} />;
};
