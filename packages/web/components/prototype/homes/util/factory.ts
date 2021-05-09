import { category, CategoryPrototypeProps } from '../prototype-homes-category';
import { nearby, NearbyPrototypeProps } from '../prototype-homes-nearby';

export const factory = (
  props: CategoryPrototypeProps | NearbyPrototypeProps
) => {
  return {
    ...category(props),
    ...nearby(props),
  };
};
