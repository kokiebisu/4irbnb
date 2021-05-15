import { back } from '../back';
import { banner } from '../banner';
import { faq } from '../faq';
import { more } from '../more';
import { sharing } from '../sharing';

export const factory = (props) => {
  return {
    ...back(props),
    ...banner(props),
    ...faq(props),
    ...more(props),
    ...sharing(props),
  };
};
