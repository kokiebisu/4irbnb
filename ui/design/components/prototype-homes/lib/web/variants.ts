import { category } from './prototype.category';
import { nearby } from './prototype.nearby';

export const webVariants: (props) => { [variant: string]: JSX.Element } = (
  props
) => {
  return {
    ...category(props),
    ...nearby(props),
  };
};
