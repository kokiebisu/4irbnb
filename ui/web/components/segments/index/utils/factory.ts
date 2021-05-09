import { anywhere } from '../anywhere';
import { category } from '../category';
import { banner } from '../banner';
import { destinations } from '../destinations';
import { nearby } from '../nearby';
import { online } from '../online';
import { worth } from '../worth';

export const factory = (props) => {
  return {
    ...anywhere(props),
    ...banner(props),
    ...category(props),
    ...destinations(props),
    ...nearby(props),
    ...online(props),
    ...worth(props),
  };
};
