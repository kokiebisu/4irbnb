import { input } from './layout.input';
import { create } from './layout.create';
import { homes } from './section/layout.homes';
import { landing } from './section/layout.landing';
import { onlinehost } from './section/layout.onlinehost';
import { currency } from './layout.currency';
import { location } from './modal/layout.location';

export const webVariants = (props) => {
  return {
    ...input(props),
    ...create(props),
    ...homes(props),
    ...landing(props),
    ...onlinehost(props),
    ...currency(props),
    ...location(props),
  };
};
