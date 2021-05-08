import { currency } from '../prototype-globe-currency';
import { language } from '../prototype-globe-language';

export const factory = (props) => {
  return {
    ...currency(props),
    ...language(props),
  };
};
