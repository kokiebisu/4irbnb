import { availability } from '@bar/bar-availability';
import { covid } from '@bar/bar-covid';
import { create } from '@bar/bar-create';
import { filters } from '@bar/bar-filters';
import { menu } from '@bar/bar-menu';
import { paginate } from '@bar/bar-paginate';
import { progress } from '@bar/bar-progress';

export const barFactory = (props) => {
  return {
    ...availability(props),
    ...covid(props),
    ...create(props),
    ...filters(props),
    ...menu(props),
    ...paginate(props),
    ...progress(props),
  };
};
