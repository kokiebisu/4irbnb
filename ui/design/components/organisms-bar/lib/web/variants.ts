import { availability } from './bar.availability';
import { covid } from './bar.covid';
import { create } from './bar.create';
import { filters } from './bar.filters';
import { menu } from './bar.menu';
import { paginate } from './bar.paginate';
import { progress } from './bar.progress';
import { search } from './bar.search';

export const webVariants: (
  props
) => { [variant: string]: { component: JSX.Element; css: any } } = (props) => {
  return {
    ...availability(props),
    ...covid(props),
    ...create(props),
    ...filters(props),
    ...menu(props),
    ...paginate(props),
    ...progress(props),
    ...search(props),
  };
};
