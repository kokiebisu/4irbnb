import { experiences } from '../header-experiences';
import { details } from '../header-details';
import { homes } from '../header-homes';

export const factory = (props) => {
  return {
    ...details(props),
    ...white(props),
    ...landing(props),
    ...homes(props),
    ...experiences(props),
    ...onlinehost(props),
    ...stay(props),
  };
};
