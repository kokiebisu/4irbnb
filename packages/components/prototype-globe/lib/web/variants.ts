import { currency } from './prototype.currency';
import { language } from './prototype.language';

export const webVariants = (props) => {
  return {
    ...currency(props),
    ...language(props),
  };
};
