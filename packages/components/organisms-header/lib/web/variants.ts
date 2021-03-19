import { details } from './header.details';
import { experiences } from './header.experiences';
import { homes } from './header.homes';
import { landing } from './header.landing';
import { onlinehost } from './header.onlinehost';
import { stay } from './header.stay';
import { white } from './header.white';

export const webVariants = (props) => {
  return {
    ...details(props),
    ...experiences(props),
    ...homes(props),
    ...landing(props),
    ...onlinehost(props),
    ...stay(props),
    ...white(props),
  };
};
