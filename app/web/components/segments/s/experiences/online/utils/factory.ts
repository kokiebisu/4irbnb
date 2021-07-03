import { starting } from '../starting';
import { collections } from '../collections';
import { banner } from '../banner';
import { cards } from '../cards';

export const factory = (props) => {
  return {
    ...banner(props),
    ...cards(props),
    ...collections(props),
    ...starting(props),
  };
};
