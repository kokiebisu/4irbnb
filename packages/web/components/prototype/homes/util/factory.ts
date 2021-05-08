import { category } from '../prototype-homes-category';
import { nearby } from '../prototype-homes-nearby';

export const factory = (props) => {
  return {
    ...category(props),
    ...nearby(props),
  };
};
