import { category } from './prototype.category';
import { nearby } from './prototype.nearby';

export const webVariants: (
  props
) => {
  [variant: string]: {
    component: JSX.Element;
    css: any;
  };
} = (props) => {
  return {
    ...category(props),
    ...nearby(props),
  };
};
